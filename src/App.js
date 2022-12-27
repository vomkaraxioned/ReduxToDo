import React, { useState } from "react";
import Title from "./components/Title/index";
import appConfig from "./appConfig";
import Form from "./components/Form/index";
import Tabs from "./components/Tabs/index";
import Todo from "./components/Todo/index";
import { useSelector, useDispatch } from "react-redux";
import add, { edit, remove, complete,saveEdited } from "./store/actions/todoActions";

const App = () => {

  const { container, title, form, tabDetails } = appConfig,
    todoList = useSelector((state => state.todoReducer)),
    dispatch = useDispatch(),
    [tabFilter, setTabFilter] = useState("active"),
    controlsHandler = { dispatch, edit, remove, complete,saveEdited };
    document.body.classList.add("bg-[#8074c5]");

  return (
    <>
      <Title name={title.name} styleName = {title.styleName}/>
      <Form formDetails={form.actions} inputs={form.inputs} submitHandler={(data) => dispatch(add(data))} />
      <Tabs tabs={tabDetails.tabs} tabFilterHandler={setTabFilter} tabsStyle={tabDetails.tabsStyle} tabStyle={tabDetails.tabStyle}/>
      <Todo todoList={todoList} controlsHandler={controlsHandler} tabFilter={tabFilter} />
    </>
  );
};

export default App;
