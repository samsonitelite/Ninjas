import Footer from "./Footer";
import Navbar from "./Navbars";

const Layout = ({ children }) => {
    return ( 
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;