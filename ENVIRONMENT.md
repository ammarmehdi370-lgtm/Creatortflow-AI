# Environment

Copy `.env.example` to `.env.local`. Local boot only needs the app URL; database and Redis are needed for persistence and queues. `NEXTAUTH_*` will be needed when authentication is implemented. S3 is needed for production asset storage. AI keys are feature-specific: OpenAI/Anthropic/Google for generation, Deepgram/AssemblyAI for captions, ElevenLabs/PlayHT for voice. Stripe keys are needed only for billing.

Never commit `.env.local` or provider secrets.
