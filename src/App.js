import React, { useState } from "react";
import Title from "./components/Title/index";
import appConfig from "./appConfig";
import Form from "./components/Form/index";
import Tabs from "./components/Tabs/index";
import Todo from "./components/Todo/index";
import { useSelector, useDispatch } from "react-redux";
import add, { edit, remove, complete,saveEdited } from "./store/actions/todoActions";

const App = () => {

  const { container, title, form, tabs } = appConfig,
    todoList = useSelector((state => state.todoReducer)),
    dispatch = useDispatch(),
    [tabFilter, setTabFilter] = useState("active"),
    controlsHandler = { dispatch, edit, remove, complete,saveEdited };

  return (
    <>
      <Title name={title.name} />
      <Form formDetails={form.actions} inputs={form.inputs} submitHandler={(data) => dispatch(add(data))} />
      <Tabs tabs={tabs} tabFilterHandler={setTabFilter} />
      <Todo todoList={todoList} controlsHandler={controlsHandler} tabFilter={tabFilter} />
    </>
  );
};

export default App;
