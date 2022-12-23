import tw from "tailwind-styled-components";

const InputContainer = tw.div`
  flex
  ${props=>props.basis==="60%"?"basis-9/12":"basis-2/11"}
  last:before:content-'\f055'
`;

export default InputContainer;