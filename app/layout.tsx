import '@/styles/globals.css';
import 'antd/dist/reset.css';
import { ConfigProvider, theme } from 'antd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Летняя школа сетевых инженеров',
  description: 'Учебный сайт о профессии сетевого инженера',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Enable dark mode for Ant Design (class "dark" will be toggled by Tailwind)
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

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
