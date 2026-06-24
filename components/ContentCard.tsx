"use client";
import { Card, Tag, Space, Typography, Button } from 'antd';
import CopyButton from './CopyButton';
import { ReactNode } from 'react';

interface ContentCardProps {
  title: string;
  description: string;
  tags?: string[];
  extra?: ReactNode;
  copyText?: string;
}

export default function ContentCard({
  title,
  description,
  tags,
  extra,
  copyText,
}: ContentCardProps) {
  return (
    <Card hoverable className="border border-gray-200 dark:border-gray-700" extra={extra}>
      <Space direction="vertical" size="small" className="w-full">
        <Typography.Title level={4} className="m-0">
          {title}
        </Typography.Title>
        <Typography.Paragraph className="m-0">
          {description}
        </Typography.Paragraph>
        {tags && (
          <Space wrap>
            {tags.map((t) => (
              <Tag key={t} color="blue">
                {t}
              </Tag>
            ))}
          </Space>
        )}
        {copyText && <CopyButton text={copyText} />}
      </Space>
    </Card>
  );
}
