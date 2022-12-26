import tw from "tailwind-styled-components";
const InputContainer = tw.div`
  flex
  bg-blue-900
  ${props=>props.basis === "60%"?"basis-9/12":"basis-2/11"}
  mr-5
  last:mr-0
  last:justify-center
  last:after:flex
  last:after:w-30
  last:after:h-30
  last:after:font-['FontAwesome']
  last:after:font-black
  last:after:bg-red-900
  last:after:content-['\f002']
  last:after:float-right
`;

export default InputContainer;