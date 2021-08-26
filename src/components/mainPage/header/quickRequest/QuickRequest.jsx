import React from "react";
import "./quickRequest.scss";

const inputs = {
  type: [
    {
      name: "وسیله",
    },
    {
      name: "برند",
    },
    {
      name: "نام و نام خانوادگی",
    },
    {
      name: "شماره تلفن",
    },
  ],
  adress: [
    {
      name: "نشانی",
    },
  ],
};

const QuickRequest = () => {
  return (
    <div className="quickRequest">
      <h4>درخواست تعمیرکار</h4>
      <div className=" inputs">
        {inputs.type.map((input) => {
          return (
            <div key={input.name} className="inputWrapper">
              <input className="input" type="text" placeholder={input.name} />
            </div>
          );
        })}
      </div>

      <div className="adressInputs inputs">
        {inputs.adress.map((input) => {
          return (
            <div key={input.name} className="inputWrapper">
              <input className="input" type="text" placeholder={input.name} />
            </div>
          );
        })}
      </div>
      <button>ثبت درخواست</button>
    </div>
  );
};

export default QuickRequest;
