import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src="/images/Logo.png" alt="weatherLogo" />
      <nav>
        <h3> صفحه اصلی</h3>
        <h3>تعمیر سایر وسایل </h3>
        <h3>تماس با ما</h3>
        <h3>درباره ما</h3>
      </nav>
    </div>
  );
};

export default NavBar;
