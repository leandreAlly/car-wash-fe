import { Button } from 'antd';
import LandingPage from './components/main/LandingPage';
import NavBar from './components/sub/NavBar';

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <LandingPage />
    </main>
  );
}
