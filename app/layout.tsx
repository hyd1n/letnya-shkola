"use client";
import '@/styles/globals.css';
import 'antd/dist/reset.css';
import { ConfigProvider, theme } from 'antd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode, useEffect, useState } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDark, setIsDark] = useState(false);

  // Determine dark mode on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  return (
    <html lang="ru" className="dark">
      <head />
      <body className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ConfigProvider
          theme={{
            algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
          }}
        >
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
