import { ReactNode } from 'react';
import HeaderMenu from './header';
import Footer from './footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderMenu
        links={[
          { link: '/about', label: 'Hakkımızda' },
          { link: '/post', label: 'Yazılar' },
          { link: '/contact', label: 'İletişim' },
        ]}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
