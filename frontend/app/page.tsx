import Container from "../components/Container";
import ContentCard from "../components/ContentCard";
import CopyButton from "../components/CopyButton";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  const demoText = "Hello from Next + AntD";
  return (
    <Container>
      {/* Hero */}
      <section className="text-center">
        <Title level={1}>Your product, simplified</Title>
        <Paragraph className="text-lg">
          Quickly build beautiful pages with Tailwind and Ant Design.
        </Paragraph>
        <a href="/about" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Learn more</a>
      </section>

      {/* Feature cards */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <ContentCard
          title="Fast UI"
          description="Ant Design components + Tailwind utilities."
          tags={["antd", "tailwind"]}
        />
        <ContentCard
          title="SEO ready"
          description="Next.js App Router gives static rendering out of the box."
          tags={["ssr", "seo"]}
        />
        <ContentCard
          title="Deploy instantly"
          description="One‑click Vercel deployments."
          tags={["vercel", "ci/cd"]}
          extra={<CopyButton text={demoText} />}
        />
      </section>
    </Container>
  );
}
