import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'CreatorFlow AI', description: 'AI-powered video creation for modern creators.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
