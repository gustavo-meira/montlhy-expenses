import { cn } from '@/lib/cn';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Despesas Do Mês',
  description: 'App para gerenciar as despesas do mês.',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
