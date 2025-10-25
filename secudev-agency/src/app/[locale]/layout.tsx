import { Montserrat, Roboto } from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'SecuDev Agency - Agence de Développement Web et Mobile Sécurisé',
  description: 'Nous concevons des applications web et mobiles ultra-sécurisées, performantes et sur-mesure pour les entreprises exigeantes.',
  metadataBase: new URL('https://secudevagency.com'),
  openGraph: {
    title: 'SecuDev Agency',
    description: 'Votre partenaire pour un développement digital fiable et sécurisé.',
    url: 'https://secudevagency.com',
    siteName: 'SecuDev Agency',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SecuDev Agency',
    description: 'Sécurité et Développement : Votre Agence Digitale Fiable',
  },
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} font-sans bg-brand-light text-gray-900 dark:bg-gray-900 dark:text-brand-light transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsentBanner />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
