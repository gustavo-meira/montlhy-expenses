import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{props.children}</body>
    </html>
  );
};

export default RootLayout;
