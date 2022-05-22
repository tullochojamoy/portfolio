//import Footer from '../pages/Footer';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
        <Meta />
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout;