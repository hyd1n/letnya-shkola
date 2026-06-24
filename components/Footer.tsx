import { Typography, Space } from 'antd';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 mt-12">
      <div className="container mx-auto text-center">
        <Space direction="vertical" size="small" className="w-full">
          <Typography.Text className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Летняя школа сетевых инженеров
          </Typography.Text>
          <Link href="/privacy" className="text-primary">
            Политика конфиденциальности
          </Link>
        </Space>
      </div>
    </footer>
  );
}
