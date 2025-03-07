from google import genai
from google.genai import types
import pandas as pd
import time
import os

def read_prompt_text(prompt_file):
    try:
        with open(f'/Users/vigneshramesh/Desktop/Github/guardianbot/Synthetic Data Gen/{prompt_file}', 'r', encoding='utf-8') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print(f"Error: {prompt_file} file not found")
        return None
    except Exception as e:
        print(f"Error reading file: {str(e)}")
        return None

def generate_with_prompt(prompt_text):
    try:
        client = genai.Client(
            vertexai=True,
            project="electricwin25lon-512",
            location="us-central1",
        )

        model = "gemini-2.0-flash-001"
        contents = [prompt_text]
        
        generate_content_config = types.GenerateContentConfig(
            temperature=1,
            top_p=0.95,
            max_output_tokens=8192,
            response_modalities=["TEXT"],
        )

        response = client.models.generate_content(
            model=model,
            contents=contents,
            config=generate_content_config,
        )
        
        return response.text
    except Exception as e:
        print(f"Error generating content: {str(e)}")
        return None

def generate_multiple_samples(num_samples=30, prompt_file='bullying.txt'):
    prompt_text = read_prompt_text(prompt_file)
    if not prompt_text:
        return
    
    samples = []
    for i in range(num_samples):
        print(f"\nGenerating sample {i+1}/{num_samples}...")
        response = generate_with_prompt(prompt_text)
        if response:
            samples.append({
                'sample_id': i + 1,
                'conversation': response
            })
            print(f"Sample {i+1} generated successfully")
        else:
            print(f"Failed to generate sample {i+1}")
        
        # Add a small delay between API calls to avoid rate limiting
        if i < num_samples - 1:
            time.sleep(2)
    
    return samples

# Example usage
if __name__ == "__main__":
    csv_path = '/Users/vigneshramesh/Desktop/Github/guardianbot/Synthetic Data Gen/bullying.csv'
    
    # Read existing CSV if it exists
    if os.path.exists(csv_path):
        print("Reading existing CSV file...")
        existing_df = pd.read_csv(csv_path)
        print(f"Found {len(existing_df)} existing samples")
        
        # Generate new samples
        print("\nStarting to generate 30 more samples...")
        new_samples = generate_multiple_samples(30, 'bullying.txt')
        
        if new_samples:
            # Create DataFrame from new samples
            new_df = pd.DataFrame(new_samples)
            
            # Update sample IDs to continue from existing data
            new_df['sample_id'] = new_df['sample_id'] + len(existing_df)
            
            # Combine existing and new data
            combined_df = pd.concat([existing_df, new_df], ignore_index=True)
            
            # Save back to CSV
            combined_df.to_csv(csv_path, index=False)
            print(f"\nSuccessfully saved {len(combined_df)} total samples to {csv_path}")
        else:
            print("No new samples were generated successfully")
    else:
        # If file doesn't exist, create new one
        print("No existing CSV found. Creating new file...")
        samples = generate_multiple_samples(30, 'bullying.txt')
        
        if samples:
            df = pd.DataFrame(samples)
            df.to_csv(csv_path, index=False)
            print(f"\nSuccessfully saved {len(samples)} samples to {csv_path}")
        else:
            print("No samples were generated successfully")
