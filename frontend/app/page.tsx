'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('Loading…');

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg('Error'));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">{msg}</h1>
    </main>
  );
}
