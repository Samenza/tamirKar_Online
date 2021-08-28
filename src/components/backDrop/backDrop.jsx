import "./backDrop.scss";

const BackDrop = ({ setBackDrop }) => {
  return <div onClick={() => setBackDrop(false)} className="backDrop"></div>;
};

export default BackDrop;
