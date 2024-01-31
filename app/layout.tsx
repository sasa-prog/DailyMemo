import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daily memo',
  description: '手帳のようなメモ帳',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
