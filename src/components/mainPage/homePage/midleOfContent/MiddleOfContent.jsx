import { useEffect, useRef } from "react";
import "./MiddleOfContent.scss";

const MiddleOfContent = () => {
  const iconRef = useRef();
  const secondIconRef = useRef();
  const optionRef = useRef({
    root: null,
    rootMargin: "0px 0px -130px 0px",
    threshold: 1,
  });
  const callBackFucntion = (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        if (entry.target.className === "gearIcon") {
          iconRef.current.classList.add("gearIconAnimation");
        }
        if (entry.target.className === "payIcon") {
          secondIconRef.current.classList.add("payAnimationIcon");
        }
      }
    }
  };

  useEffect(() => {
    const element = iconRef.current;
    const secondElement = secondIconRef.current;
    const observer = new IntersectionObserver(
      callBackFucntion,
      optionRef.current
    );
    if (element && secondElement) {
      [element, secondElement].map((e) => {
        return observer.observe(e);
      });
    }

    return () => {
      if (element && secondElement) {
        [element, secondElement].map((e) => {
          return observer.unobserve(e);
        });
      }
    };
  }, [iconRef]);

  return (
    <section id="test" className="midContent">
      <div>
        <h3>درخواست اینترنتی تعمیرکار در منزل </h3>
        <div className="paragraph firstParagraph">
          <img
            ref={iconRef}
            className="gearIcon"
            src="/images/icons/midContent/gear.png"
            alt="gear"
          />
          <p className="p-main">
            حتما می دانید که زمانی که وسیله ای دچار مشکل و خرابی می شود جا به جا
            کردن آن ممکن است خرابی بیشتر آن را به دنبال داشته باشد. شرکت ما این
            امکان را فراهم کرده است که انجام خدمات مختلف و تعمیرات را در منزل
            شما انجام دهد. برای این کار فرمی در سایت شرکت طراحی شده است که با پر
            کردن این فرم شما می توانید نوع وسیله را ذکر نمایید تا پس از تماس
            کارشناسان و هماهنگی باشما تعمیرکاران در محل جهت ارائه خدمات حضور
            یابند. درخواست آنلاین تعمیرات در محل باعث صرفه جویی زیادی در زمان و
            هزینه می گردد و بدون وجود هیچ گونه مشکلی خدمات مختلف به مشتری ارائه
            می شود.
          </p>
        </div>
        <div className="paragraph secondParagraf ">
          <div>
            <h3>پرداخت هزینه تعمیرات به صورت آنلاین</h3>
            <p className="p-main">
              این روزها کمتر کسی پول نقد را با خود حمل می کند و اکثر پرداخت ها
              به صورت کارت به کارت و یا در صورت خرید آنلاین، به صورت اینترنتی می
              باشد. شرکت تکنیک سرویس پارس نیز از این قاعده مستثنی نیست و پس از
              ارائه خدمات مختلف از قبیل نصب، راه اندازی و تعمیرات مختلف، مبلغ
              مورد نظر می تواند به تعمیرکار داده شود و یا به صورت آنلاین و
              اینترنتی به حساب شرکت واریز گردد. هزینه های دریافتی این شرکت بر
              اساس تعرفه های موجود بوده و هزینه اضافی از مشتریان دریافت نمی
              گردد.
            </p>
          </div>
          <img
            ref={secondIconRef}
            className="payIcon"
            src="/images/icons/midContent/pay.png"
            alt="pay"
          />
        </div>
      </div>
    </section>
  );
};

export default MiddleOfContent;
