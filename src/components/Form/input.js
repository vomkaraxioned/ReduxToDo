import InputContainer from "../../style/InputContainer.style";
import { useRef } from "react";

const Input = ({ type, name, styleName, basis, placeholder, handler, index }) => {
  const reference = useRef();


  return (
    <InputContainer basis={basis}>
      <input type={type} name={name} className={`flex-1 py-1 px-5 border-slate-700 focus:outline-blue-900`} placeholder={placeholder} ref={reference} onChange={() => handler(reference.current.value)} />
    </InputContainer>
  );
};

export default Input;