"use client";
import { Button, Tooltip } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip title={copied ? 'Скопировано' : 'Скопировать'} placement="top">
      <Button
        size="small"
        icon={copied ? <CheckOutlined /> : <CopyOutlined />}
        onClick={copy}
      />
    </Tooltip>
  );
}
