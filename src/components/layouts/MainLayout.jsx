import { Outlet } from 'react-router-dom';
import Header from '@/components/layouts/Header';

export default function MainLayout() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="mx-auto mt-17.5 w-full max-w-300 pt-4.25 pb-8.75 md:pt-6 md:pb-18 lg:pt-6 lg:pb-14.5">
        <Outlet />
      </main>
    </div>
  );
}
