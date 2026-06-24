"use client";
import { Typography, Space } from 'antd';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import ContentCard from '@/components/ContentCard';

const posts = [
  {
    slug: 'network-basics',
    title: 'Сетевые основы: что должно знать каждый',
    excerpt: 'Разбираем OSI, TCP/IP и простейшие топологии.',
    tags: ['network', 'basics'],
  },
  {
    slug: 'routing-protocols',
    title: 'OSPF vs BGP: когда и почему использовать',
    excerpt: 'Сравнение двух популярных протоколов уровня 3.',
    tags: ['routing', 'protocols'],
  },
];

export default function Blog() {
  return (
    <PageWrapper>
      <Typography.Title level={2}>Блог</Typography.Title>
      <Space direction="vertical" size="large" className="w-full">
        {posts.map((p) => (
          <ContentCard
            key={p.slug}
            title={p.title}
            description={p.excerpt}
            tags={p.tags}
            extra={<Link href={`/blog/${p.slug}`}><a>Читать →</a></Link>}
            copyText={p.title}
          />
        ))}
      </Space>
    </PageWrapper>
  );
}
