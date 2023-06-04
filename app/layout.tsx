import { Header } from '~/src/components/proposition/Header';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-900 text-gray-50'>
        <header />
        <div className='bg-red-700 p-4'>{children}</div>
        <p className='bg-blue-700 p-2'>Composant Footer</p>
      </body>
    </html>
  );
}
