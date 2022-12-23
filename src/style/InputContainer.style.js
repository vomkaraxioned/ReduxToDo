import tw from "tailwind-styled-components";

const InputContainer = tw.div`
  flex
  ${props=>props.basis === "60%"?"basis-9/12":"basis-2/11"}
  last:before:font-['FontAwesome']
  last:before:font-black
  last:before:content-['\f0fe']

`;

export default InputContainer;