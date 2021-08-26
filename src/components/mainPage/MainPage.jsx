import HomePage from "./homePage/HomePage";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "../../sassStyles/_typography.scss";
import NavBar from "./header/navBar/NavBar";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default MainPage;
