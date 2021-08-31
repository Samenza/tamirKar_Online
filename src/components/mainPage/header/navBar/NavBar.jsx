import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src="/images/Logo.png" alt="weatherLogo" />
      <nav>
        <h4> صفحه اصلی</h4>
        <h4>تعمیر سایر وسایل </h4>
        <h4>تماس با ما</h4>
        <h4>درباره ما</h4>
      </nav>
    </div>
  );
};

export default NavBar;
