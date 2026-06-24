"use client";

import { ReactNode } from "react";
import { Space } from "antd";

/**
 * Page wrapper that applies Tailwind paddings and an optional Ant Design Space
 * to keep consistent vertical rhythm across pages.
 */
export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-12">
      {/* AntD Space adds consistent vertical spacing between children */}
      <Space direction="vertical" size="large" className="w-full">
        {children}
      </Space>
    </div>
  );
}
