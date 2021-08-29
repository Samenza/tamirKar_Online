import "./homePage.scss";
import React, { useEffect, useRef } from "react";

const icons = [
  {
    src: "/images/icons/contentIcons/notes.png",
    alt: "notes",
    discription: "ثبت درخواست",
  },
  {
    src: "/images/icons/contentIcons/calendar.png",
    alt: "calendar",
    discription: "هماهنگی کارشناسان با شما",
  },

  {
    src: "/images/icons/contentIcons/receipt.png",
    alt: "receipt",
    discription: "بازدید و تعیین هزینه",
  },
  {
    src: "/images/icons/contentIcons/tool-box.png",
    alt: "toolBox",
    discription: "تعمیر در محل",
  },
  {
    src: "/images/icons/contentIcons/guarantee.png",
    alt: "gurantee",
    discription: "تست و ضمانت",
  },
];

const HomePage = () => {
  const iconRef = useRef();
  const optionRef = useRef({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const callBackFucntion = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting)
      for (let item of iconRef.current.children) {
        item.classList.remove("imgWrapperHide");
        item.classList.add("imgWrapper");
        item.classList.add("animationIcon");
      }
  };

  useEffect(() => {
    const element = iconRef.current;
    const observer = new IntersectionObserver(
      callBackFucntion,
      optionRef.current
    );
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [iconRef]);

  return (
    <div className="content">
      <section ref={iconRef} className="headOfContent">
        {icons.map((icon) => (
          <div key={icon.alt} className="imgWrapperHide">
            <img src={icon.src} alt={icon.alt} />
            <h5>{icon.discription}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
