// frontend/src/pages/FooterOnly.tsx
/*
 * FooterOnly page layout (used for minimal pages like Privacy Policy, Terms, etc.)
 * Why: Provides a consistent footer without the dashboard sidebar/header.
 * What it does: Renders its children inside a layout that includes only the Footer.
 * How to modify later: Add a simple header or back button if needed.
 */
import React from 'react';
import Footer from '../components/layout/Footer';

interface FooterOnlyProps {
  children: React.ReactNode;
}

const FooterOnly: React.FC<FooterOnlyProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default FooterOnly;