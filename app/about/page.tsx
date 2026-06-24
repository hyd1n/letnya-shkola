"use client";
import { Typography, Space, Card, Avatar } from 'antd';
import PageWrapper from '@/components/PageWrapper';

const team = [
  { name: 'Иван Иванов', role: 'Курирующий преподаватель', avatar: '/avatars/ivan.png' },
  { name: 'Мария Петрова', role: 'Техспециалист', avatar: '/avatars/maria.png' },
];

export default function About() {
  return (
    <PageWrapper>
      <Typography.Title level={2}>О школе</Typography.Title>
      <Typography.Paragraph>
        Мы обучаем сетевому делу от нуля до уровня, позволяющего сдавать международные
        сертификаты и стартовать в IT.
      </Typography.Paragraph>

      <Typography.Title level={3}>Наша команда</Typography.Title>
      <Space wrap>
        {team.map((m) => (
          <Card key={m.name} style={{ width: 240 }} hoverable>
            <Avatar src={m.avatar} size={64} />
            <Typography.Title level={4} className="mt-2">
              {m.name}
            </Typography.Title>
            <Typography.Text>{m.role}</Typography.Text>
          </Card>
        ))}
      </Space>
    </PageWrapper>
  );
}
