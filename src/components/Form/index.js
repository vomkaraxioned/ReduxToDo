import Input from "./input";

import { useState } from "react";

const Form = ({ formDetails, inputs, submitHandler }) => {
  const [text, setText] = useState();

  const eventPreventer = (e) => {
    e.preventDefault();
    submitHandler(text);
  }

  return (
      <form action={formDetails.action} name={formDetails.name} onSubmit={eventPreventer} className="w-1/2  mx-auto flex justify-center">
        {
          inputs.map(({ type, name, styleName, basis, placeholder }, i) => <Input type={type} name={name} styleName={styleName} basis={basis} placeholder={placeholder} key={name} handler={setText} />)
        }
      </form>
  );
};

export default Form;