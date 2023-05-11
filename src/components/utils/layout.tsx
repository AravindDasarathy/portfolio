import { Nunito } from 'next/font/google';
import Head from 'next/head';

const nunito = Nunito({ subsets: ['latin'] });

const metadata = {
  title: 'My Portfolio',
  description: 'My portfolio website'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Aravind" />
        <title>{metadata.title}</title>
      </Head>

      <main className={nunito.className}>{children}</main>
    </>
  );
}
