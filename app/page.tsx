"use client";
import { Typography, Button, Space } from 'antd';
import PageWrapper from '@/components/PageWrapper';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export default function Home() {
  return (
    <PageWrapper>
      {/* hero */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-gradientEnd rounded-xl">
        <Typography.Title className="text-white text-4xl md:text-5xl">
          Присоединяйся к летней школе сетевых инженеров
        </Typography.Title>
        <Typography.Text className="text-white text-lg md:text-xl">
          За несколько недель получишь практику реального сетевого дела
        </Typography.Text>
        <br />
        <Space className="mt-6">
          <Link href="/services">
            <Button type="primary" size="large">
              Что учим
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="large">Связаться</Button>
          </Link>
        </Space>
      </section>

      {/* why us */}
      <section className="mt-16">
        <Typography.Title level={2}>Зачем нам?</Typography.Title>
        <Space direction="vertical" size="large" className="w-full">
          <ContentCard
            title="Лаборатории в браузере"
            description="Работай с реальными топологиями без установки ПО."
            tags={['hands‑on', 'lab']}
          />
          <ContentCard
            title="Опытные наставники"
            description="Инженеры с 10+ лет в индустрии помогают в реальном времени."
            tags={['mentor', 'industry']}
          />
          <ContentCard
            title="Сертификация"
            description="Подготовка к CCNA / JNCIA – экзамен включён."
            tags={['certification']}
          />
        </Space>
      </section>
    </PageWrapper>
  );
}
