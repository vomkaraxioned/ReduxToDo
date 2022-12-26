import tw from "tailwind-styled-components";
const InputContainer = tw.div`
  flex
  bg-blue-900
  ${props=>props.basis === "60%"?"basis-9/12":"basis-2/11"}
  // last:after:flex
  // last:after:w-30
  // last:after:h-30
  // last:after:font-[FontAwesome]
  // last:after:font-black
  // last:after:bg-red-900
  // last:after:content-['hello']
`;

export default InputContainer;