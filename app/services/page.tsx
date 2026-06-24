"use client";
import { Typography, Space, Card, Table, Collapse } from 'antd';
import PageWrapper from '@/components/PageWrapper';

const courses = [
  { name: 'Базовый сетевой курс', duration: '4 недели', price: '20 000 ₽' },
  { name: 'Продвинутый routing', duration: '6 недель', price: '30 000 ₽' },
];

export default function Services() {
  return (
    <PageWrapper>
      <Typography.Title level={2}>Курсы и цены</Typography.Title>
      <Space direction="vertical" size="large" className="w-full">
        <Card title="Тарифы">
          <Table
            dataSource={courses}
            columns={[
              { title: 'Курс', dataIndex: 'name', key: 'name' },
              { title: 'Длительность', dataIndex: 'duration', key: 'duration' },
              { title: 'Цена', dataIndex: 'price', key: 'price' },
            ]}
            pagination={false}
          />
        </Card>
        <Collapse>
          <Collapse.Panel header="Вопросы, которые часто задают" key="1">
            <Typography.Paragraph>
              <strong>Как записаться?</strong> Переходим в «Контакты», оставляем почту и получаем ссылку на оплату.
            </Typography.Paragraph>
            <Typography.Paragraph>
              <strong>Есть скидка?</strong> Студенты‑абитуриенты получают 10 % при предоплате.
            </Typography.Paragraph>
          </Collapse.Panel>
        </Collapse>
      </Space>
    </PageWrapper>
  );
}
