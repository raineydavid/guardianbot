# Guardian BOT

guardianBot is a comprehensive child safety monitoring and guidance system that helps parents and guardians protect their children in the digital age. The system provides real-time monitoring, alerts, and guidance for various online safety concerns.

## Features

- **Real-time Monitoring**: Track children's online activities and interactions
- **Alert System**: Receive notifications about potential safety concerns
- **Guidance Resources**: Access expert guidance on various topics including:
  - Mental Health
  - Inappropriate Content
  - Parasocial Relationships
  - Plagiarism
  - Sensitive Information
  - Excessive AI Usage
- **Dashboard**: Visualize safety metrics and trends
- **Children Management**: Monitor multiple children with individual metrics
- **Chat History**: Review and analyze communication patterns

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn UI Components
- React Query
- Supabase Client

### Backend
- Python
- Google Cloud Platform
- Supabase

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Python 3.x
- Google Cloud SDK
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ziyunp/guardianbot.git
cd guardianbot
```

2. Install frontend dependencies:
```bash
cd guardianbot-ui
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8081`

## Project Structure

```
guardianbot/
├── guardianbot-ui/          # Frontend React application
├── child-chatbot/          # Backend chatbot service
├── Conversation Log Processor/  # Log processing utilities
├── Synthetic Data Gen/     # Data generation tools
└── Guidance_*.txt         # Guidance resources
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Shadcn UI for the beautiful component library
- Supabase for the backend infrastructure
- Google Cloud Platform for cloud services
