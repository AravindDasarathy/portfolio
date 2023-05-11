import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RootLayout, Navbar } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Navbar />
      <Component {...pageProps} />
    </RootLayout>
  );
}
