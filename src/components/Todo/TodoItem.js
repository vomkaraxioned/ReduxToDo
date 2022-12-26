import { useState, useRef } from "react";

const TodoItem = ({ id, toDo, status, controlsHandler }) => {
  const [details, setDetails] = useState({ id: id, status: status, text: toDo }),
    textareaRef = useRef();

  const textareaData = (text) => {
    setDetails(prev => {
      return { ...prev, text: text };
    });
  };

  const completedHandler = (e) => {
    e.target.parentElement.parentElement.classList.add("moveOut");
    setTimeout(() => controlsHandler.dispatch(controlsHandler.complete(details)), 1000);
  };

  const deleteHandler = (e) => {
    e.target.parentElement.parentElement.classList.add("moveOut");
    setTimeout(() => controlsHandler.dispatch(controlsHandler.remove(details)), 1000);

  };

  return (
    <li data-id={id} data-status={status} >
      {status === "completed" ? <span>done</span> : null}

      <textarea rows="10" defaultValue={toDo} ref={textareaRef} onChange={() => textareaData(textareaRef.current.value)} onBlur={() => controlsHandler.dispatch(controlsHandler.saveEdited(details, textareaRef.current))} disabled></textarea>

      <div className="controls">

        <button className="controls__edit" onClick={() => controlsHandler.dispatch(controlsHandler.edit(textareaRef.current))}>edit</button>

        {status !== "completed" ? <button className="controls__complete" onClick={(e) => completedHandler(e)}>complete</button> : null}

        <button className="controls__delete" onClick={(e) => deleteHandler(e)}>delete</button>

      </div>

    </li>
  )
}

export default TodoItem
