import React, { useEffect, useRef, useState } from "react";
import "./quickRequest.scss";

const QuickRequest = () => {
  const [brandInput, setBrandInput] = useState();
  const inputs = {
    type: [
      {
        elementType: "select",
        name: "case",
        options: [
          {
            type: "یخچال فریزر",
            brands: [
              "امرسان",
              "دوو",
              "اسنوا",
              "سامسونگ",
              "ال جی",
              "سایر موارد",
            ],
          },
          {
            type: "جاروبرقی",
            brands: [
              "پارس خزر",
              "پاناسونیک",
              "بوش",
              "سامسونگ",
              "تکنو",
              "سایر موارد",
            ],
          },
          {
            type: "ماشین لباس شویی",
            brands: [
              "اکتیو",
              "پاکشوما",
              "اسنوا",
              "سامسونگ",
              "ال جی",
              "سایر موارد",
            ],
          },
          {
            type: "ماشین ظرف شویی",
            brands: [
              "بوش",
              "دوو",
              "اسنوا",
              "سامسونگ",
              "ال جی",
              "امرسان",
              "سایر موارد",
            ],
          },
          {
            type: "کولر آبی",
            brands: ["ابسال", "برفاب", "انرژی", "لورچ", "موتوژن", "سایر موارد"],
          },
          {
            type: "کولر گازی",
            brands: [
              "ایران رادیاتور",
              "هایسنس",
              "تی سی ال",
              "سامسونگ",
              "ال جی",
              "سایر موارد",
            ],
          },
          {
            type: "تلویزیون",
            brands: [
              "تی سی ال",
              "سونی",
              "اسنوا",
              "سامسونگ",
              "ال جی",
              "سایر موارد",
            ],
          },
          {
            type: "سایر موارد",
            brands: ["سایر موارد"],
          },
        ],
      },

      { elementType: "select", name: "brands", options: brandInput },
      { elementType: "input", name: "نام و نام خانوادگی" },
      { elementType: "input", name: "شماره تلفن" },
    ],
    adress: [
      {
        name: "نشانی",
      },
    ],
  };
  const inputRef = useRef(inputs.type[0].options[0].brands);
  useEffect(() => {
    setBrandInput(inputRef.current);
  }, []);
  const selectOnChange = (e, input) => {
    setBrandInput(input.options.find((d) => d.type === e.target.value).brands);
  };
  return (
    <React.Fragment>
      <div id="request" className="quickRequest">
        <h4>درخواست تعمیرکار</h4>
        <div className=" inputs">
          {brandInput &&
            inputs.type.map((input) => {
              return (
                <div key={input.name} className="inputWrapper">
                  {input.elementType === "select" ? (
                    <React.Fragment>
                      <select
                        onChange={
                          input.name === "case"
                            ? (e) => selectOnChange(e, input)
                            : null
                        }
                        className="input selectType"
                        name={input.name}
                        id={input.name}
                      >
                        {input.options.map((option) => {
                          return (
                            <option
                              key={option.type || option}
                              value={option.type}
                            >
                              {option.type || option}
                            </option>
                          );
                        })}
                      </select>
                    </React.Fragment>
                  ) : (
                    <div key={input.name} className="inputWrapper">
                      <input
                        className="input inputType"
                        type="text"
                        placeholder={input.name}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <div className="adressInputs inputs">
          {inputs.adress.map((input) => {
            return (
              <div key={input.name} className="inputWrapper">
                <input
                  className="input inputType"
                  type="text"
                  placeholder={input.name}
                />
              </div>
            );
          })}
        </div>

        <button>ثبت درخواست</button>
      </div>
    </React.Fragment>
  );
};

export default QuickRequest;
