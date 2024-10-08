
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className='font-iransans '
    style={{ backgroundColor: '#f8f8f8', }}
    >
        <body className='font-iransansNumber h-full'>
        {children}
      </body>
    </html>
  );
}
