from google import genai
from google.genai import types
import pandas as pd
import json
import time
from datetime import datetime
import random

def setup_gemini_client():
    client = genai.Client(
        vertexai=True,
        project="electricwin25lon-512",
        location="us-central1",
    )
    return client

def generate_message_id():
    return f"msg-{random.randint(100, 999)}"

def generate_timestamp():
    # Generate a random timestamp within the last year
    now = datetime.now()
    random_days = random.randint(0, 365)
    random_hours = random.randint(0, 24)
    random_minutes = random.randint(0, 60)
    random_seconds = random.randint(0, 60)
    
    timestamp = now.replace(
        year=now.year - 1,
        day=now.day - random_days,
        hour=random_hours,
        minute=random_minutes,
        second=random_seconds
    )
    return timestamp.strftime("%Y-%m-%dT%H:%M:%SZ")

def generate_structured_data(client, conversation_text):
    prompt = f"""You are a data generation assistant. Based on the following conversation log, generate two strings in the specified formats.

Conversation Log:
{conversation_text}

Please generate:

1. A single message object in this format:
{{"id": "msg-XXX", "sender": "user", "content": "[message content]", "flagged": true/false, "timestamp": "YYYY-MM-DDThh:mm:ssZ", "flagReason": "[reason if flagged]"}}

2. A conversation array in this format:
[{{"id": "msg-XXX", "sender": "user/ai", "content": "[message content]", "timestamp": "YYYY-MM-DDThh:mm:ssZ", "flagged": true/false, "flagReason": "[reason if flagged]"}}, ...]

Use the actual conversation content from the log, but you can generate random timestamps and message IDs. The flagged messages should be those that contain potential plagiarism or academic dishonesty concerns.

Return the response as a JSON object with two keys: "single_message" and "conversation_array"."""

    model = "gemini-2.0-flash-001"
    contents = [prompt]
    
    generate_content_config = types.GenerateContentConfig(
        temperature=0.1,
        top_p=0.95,
        max_output_tokens=8192,
        response_modalities=["TEXT"],
    )

    try:
        response = client.models.generate_content(
            model=model,
            contents=contents,
            config=generate_content_config,
        )
        
        # Clean the response text
        response_text = response.text.strip()
        if response_text.startswith('```json'):
            response_text = response_text[7:]
        if response_text.endswith('```'):
            response_text = response_text[:-3]
        
        # Parse the response as JSON
        structured_data = json.loads(response_text)
        
        # Ensure the data has the required format
        if not isinstance(structured_data, dict) or 'single_message' not in structured_data or 'conversation_array' not in structured_data:
            raise ValueError("Response does not contain required fields")
            
        return structured_data
    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {str(e)}")
        print(f"Response text that failed to parse: {response_text}")
        return None
    except Exception as e:
        print(f"Error generating structured data: {str(e)}")
        return None

def process_conversations():
    # Read the input CSV
    input_df = pd.read_csv('Hackathon Generated Data.csv')
    
    # Setup Gemini client
    client = setup_gemini_client()
    
    # Process each conversation
    processed_data = []
    for index, row in input_df.iterrows():
        print(f"\nProcessing conversation {index + 1}/{len(input_df)}...")
        
        # Generate structured data
        structured_data = generate_structured_data(client, row['Conversation Log'])
        
        if structured_data:
            # Add metadata
            structured_data['alert_type'] = row['Alert Tyep']
            structured_data['original_conversation'] = row['Conversation Log']
            processed_data.append(structured_data)
            print(f"Successfully processed conversation {index + 1}")
        else:
            print(f"Failed to process conversation {index + 1}")
        
        # Add delay between API calls
        if index < len(input_df) - 1:
            time.sleep(2)
    
    # Convert to DataFrame and save
    if processed_data:
        output_df = pd.DataFrame(processed_data)
        output_df.to_csv('processed_conversations.csv', index=False)
        print(f"\nSuccessfully saved {len(processed_data)} processed conversations to processed_conversations.csv")
    else:
        print("No conversations were successfully processed")

if __name__ == "__main__":
    process_conversations()
