import Footer from "./Footer";
import Links from "./Links";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode;
}
const Layout = ({ children }: IProps) => {
  return (
    <>
      <Links />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
