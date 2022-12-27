import { useRef } from "react";

const Input = ({ type, name, styleName, placeholder, handler, wrapperStyle,icon }) => {
  const reference = useRef();


  return (
    <div className = {wrapperStyle}>
      <input type={type} name={name} className={styleName} placeholder={placeholder} ref={reference} onChange={() => handler(reference.current.value)} />
    {icon?<span className={icon}></span>:null}
    </div>
  );
};

export default Input;