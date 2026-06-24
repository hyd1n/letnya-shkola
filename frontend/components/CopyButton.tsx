"use client";

import { Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

/**
 * Button that copies provided text to the clipboard and shows a temporary
 * Ant Design success message.
 */
export default function CopyButton({ text }: { text: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      message.success("Copied to clipboard");
    } catch (err) {
      message.error("Copy failed");
    }
  };

  return (
    <Button
      type="default"
      icon={<CopyOutlined />}
      onClick={handleCopy}
      className="ml-2"
    >
      Copy
    </Button>
  );
}
