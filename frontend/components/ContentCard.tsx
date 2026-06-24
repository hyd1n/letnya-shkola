"use client";

import { Card, Tag, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

/**
 * Generic content card used across the site.
 */
export default function ContentCard({
  title,
  description,
  tags,
  extra,
}: {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  tags?: string[];
  extra?: React.ReactNode;
}) {
  return (
    <Card hoverable className="border border-gray-200">
      <Space direction="vertical" size="small" className="w-full">
        <Title level={4}>{title}</Title>
        <Paragraph className="text-sm text-gray-600">{description}</Paragraph>
        {tags && (
          <Space wrap>
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Space>
        )}
        {extra && <div className="mt-2">{extra}</div>}
      </Space>
    </Card>
  );
}
