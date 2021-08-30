import "./headOfContent.scss";
import { useEffect, useRef } from "react";
const icons = [
  {
    src: "/images/icons/contentIcons/notes.png",
    alt: "notes",
    discription: "ثبت درخواست",
    number: "/images/icons/numbers/1.png",
  },
  {
    src: "/images/icons/contentIcons/calendar.png",
    alt: "calendar",
    discription: "هماهنگی با شما",
    number: "/images/icons/numbers/2.png",
  },

  {
    src: "/images/icons/contentIcons/receipt.png",
    alt: "receipt",
    discription: "بازدید و برآورد ",
    number: "/images/icons/numbers/3.png",
  },
  {
    src: "/images/icons/contentIcons/tool-box.png",
    alt: "toolBox",
    discription: "تعمیر در محل",
    number: "/images/icons/numbers/4.png",
  },
  {
    src: "/images/icons/contentIcons/guarantee.png",
    alt: "gurantee",
    discription: "تست و ضمانت",
    number: "/images/icons/numbers/5.png",
  },
];
const HeadOfContent = () => {
  const iconRef = useRef();
  const optionRef = useRef({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const callBackFucntion = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      for (let item of iconRef.current.children) {
        if (item.localName === "div") {
          item.classList.remove("imgWrapperHide");
          item.classList.add("imgWrapper");
          item.classList.add("animationIcon");
          item.classList.add("animationIconInfinite");
        }
      }
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
    <section className="headOfContent">
      <h4>مراحل انجام درخواست شما</h4>
      <div ref={iconRef} className="iconWrapper">
        {icons.map((icon) => (
          <div key={icon.alt} className="imgWrapperHide">
            <img src={icon.number} alt="number" className={icon.alt} />
            <img src={icon.src} alt={icon.alt} className="icon" />
            <h5>{icon.discription}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadOfContent;
