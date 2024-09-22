
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className='font-iransans h-full'
    style={{ backgroundColor: '#f8f8f8' }}
    >
        <body className='font-iransansNumber '>
        {children}
      </body>
    </html>
  );
}
