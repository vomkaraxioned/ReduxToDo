import tw from "tailwind-styled-components";

const InputContainer = tw.div`
  flex
  bg-blue-900
  ${props=>props.basis === "60%"?"basis-9/12":"basis-2/11"}
  mr-5
  last:mr-0
`;

export default InputContainer;