import { Button } from 'antd';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-black">Landing Page</h1>
      <Button type="primary">Primary Button</Button>
      <h2 className="bg-primary">Test primary color</h2>
    </main>
  );
}
