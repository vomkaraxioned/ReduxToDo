import { useRef } from "react";

const Input = ({ type, name, styleName, placeholder, handler, wrapperStyle }) => {
  const reference = useRef();


  return (
    <div className = {wrapperStyle}>
      <input type={type} name={name} className={styleName} placeholder={placeholder} ref={reference} onChange={() => handler(reference.current.value)} />
    </div>
  );
};

export default Input;