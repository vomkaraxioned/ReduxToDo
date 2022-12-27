import TodoItem from "./TodoItem";

const Todo = ({ todoList, controlsHandler, tabFilter,styleName }) => {

  return (
    <ul className={styleName.todolist}>
      {todoList.length > 0 ? todoList.map(({ id, task, status }, i) => {
        if (tabFilter == status || tabFilter == "all") {
          return <TodoItem id={id} toDo={task} status={status} controlsHandler={controlsHandler} key={i} styleName={styleName}/>
        }
      }) : <li className="w-[80%] text-center mx-auto py-[50px] text-[28px]">Nothing to show</li>}
    </ul>
  );
};

export default Todo;