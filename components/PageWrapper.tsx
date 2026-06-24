import { ReactNode } from 'react';
import { Space } from 'antd';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <Space direction="vertical" size="large" className="w-full max-w-4xl mx-auto">
      {children}
    </Space>
  );
}
