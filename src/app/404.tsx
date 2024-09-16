// pages/404.tsx
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">صفحه پیدا نشد</h1>
      <p className="text-lg mb-6">متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">برگشت به صفحه اصلی</a>
      </Link>
    </div>
  );
};

export default Custom404;
