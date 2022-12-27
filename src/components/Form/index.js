import Input from "./input";

import { useState } from "react";

const Form = ({ formDetails, inputs, submitHandler }) => {
  const [text, setText] = useState();

  const eventPreventer = (e) => {
    e.preventDefault();
    submitHandler(text);
  }

  return (
      <form action={formDetails.action} name={formDetails.name} onSubmit={eventPreventer} className={formDetails.styleName} >
        {
          inputs.map(({ type, name, styleName,wrapperStyle,icon, placeholder }) => <Input type={type} name={name} styleName={styleName}  placeholder={placeholder} key={name} handler={setText} wrapperStyle={wrapperStyle} icon={icon}/>)
        }
      </form>
  );
};

export default Form;