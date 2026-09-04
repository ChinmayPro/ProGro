import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children, currentRoute }) {
  return (
    <div className="layout-container">
      <Navbar currentRoute={currentRoute} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
