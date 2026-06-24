"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Button, Drawer, Space, Typography } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ReadOutlined,
  MailOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import React from 'react';
interface MenuItem {
  label: string;
  key: string;
  href: string;
  icon: React.ReactNode;
}

const items: MenuItem[] = [
  { label: 'Главная', key: 'home', href: '/', icon: <HomeOutlined /> },
  { label: 'О школе', key: 'about', href: '/about', icon: <InfoCircleOutlined /> },
  { label: 'Курсы', key: 'services', href: '/services', icon: <AppstoreOutlined /> },
  { label: 'Блог', key: 'blog', href: '/blog', icon: <ReadOutlined /> },
  { label: 'Контакты', key: 'contact', href: '/contact', icon: <MailOutlined /> },
];

export default function Navbar() {
  const [activeKey, setActiveKey] = useState<string>('home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // sync active key with current pathname (client‑side only)
  useEffect(() => {
    const path = window.location.pathname;
    const match = items.find((i) => path.startsWith(i.href));
    if (match) setActiveKey(match.key);
  }, []);

  const menu = (
    <Menu
      mode="horizontal"
      selectedKeys={[activeKey]}
      items={items.map((i) => ({
        key: i.key,
        label: <Link href={i.href}>{i.label}</Link>,
        icon: i.icon,
      }))}
      className="hidden md:flex"
    />
  );

  const mobileMenu = (
    <Drawer
      title={<Typography.Title level={4}>Меню</Typography.Title>}
      placement="right"
      onClose={() => setDrawerOpen(false)}
      open={drawerOpen}
    >
      <Menu
        mode="vertical"
        selectedKeys={[activeKey]}
        items={items.map((i) => ({
          key: i.key,
          label: (
            <Link href={i.href} onClick={() => setDrawerOpen(false)}>
              {i.label}
            </Link>
          ),
          icon: i.icon,
        }))}
      />
    </Drawer>
  );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Typography.Title level={3} className="m-0 text-primary">
          <Link href="/">Летняя школа</Link>
        </Typography.Title>
        <Space className="items-center">
          {menu}
          {/* Mobile toggle */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
          />
          <Button type="primary">Войти</Button>
        </Space>
      </div>
      {mobileMenu}
    </header>
  );
}
