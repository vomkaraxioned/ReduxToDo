import { useState, useRef } from "react";

const TodoItem = ({ id, toDo, status, controlsHandler ,styleName}) => {
  const [details, setDetails] = useState({ id: id, status: status, text: toDo }),
    textareaRef = useRef();

  const textareaData = (text) => {
    setDetails(prev => {
      return { ...prev, text: text };
    });
  }

  return (
    <li data-id={id} data-status={status} className={styleName.todo}>
      {status === "completed" ? <span className="flex justify-center py-[5px] bg-[#867bcd] w-[25%]  self-end rounded-[10px]">done</span> : null}

      <textarea rows="10" defaultValue={toDo} ref={textareaRef} onChange={() => textareaData(textareaRef.current.value)} onBlur={() => controlsHandler.dispatch(controlsHandler.saveEdited(details, textareaRef.current))} disabled className={styleName.textarea}></textarea>

      <div className={styleName.controls}>

        <button className={styleName.control} onClick={() => controlsHandler.dispatch(controlsHandler.edit(textareaRef.current))}><span className = {styleName.icons.edit}></span>edit</button>

        {status !== "completed" ? <button className={styleName.control} onClick={() => controlsHandler.dispatch(controlsHandler.complete(details))}><span className = {styleName.icons.tick}></span>complete</button> : null}

        <button className={styleName.control } onClick={() => controlsHandler.dispatch(controlsHandler.remove(details))}><span className = {styleName.icons.del }></span>delete</button>

      </div>

    </li>
  )
}

export default TodoItem
