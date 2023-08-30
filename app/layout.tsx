import Footer from '@/components/shared/Footer';
// import { usePathname } from 'next/navigation';
import '../public/fonts/stylesheet.css';
import './globals.scss';
import Navigation from '@/components/shared/Navbar';
import { Metadata } from 'next';
// import { LoadingPage } from '@/components/shared/Loading';

export const metadata: Metadata = {
  title: 'TEDx Universitas Brawijaya',
  description:
    'TEDxUniversitasBrawijaya ingin membawa setiap individu untuk mengeksplorasi "baskara" yang terpendam akibat dari "eksklusivitas" di era modernisasi saat ini.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathName = usePathname();
  // const footerExcludedPaths = ['/'];

  return (
    <html lang="en">
      <body>
        <Navigation />
        {/* <LoadingPage /> */}
        {/* {!footerExcludedPaths.includes(pathName) && <Navigation />} */}
        {children}
        <Footer />
        {/* {!footerExcludedPaths.includes(pathName) && <Footer />} */}
      </body>
    </html>
  );
}
