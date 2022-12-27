import TodoItem from "./TodoItem";

const Todo = ({ todoList, controlsHandler, tabFilter }) => {
  return (
    <ul>
      {todoList.length > 0 ? todoList.map(({ id, task, status }, i) => {
        if (tabFilter == status || tabFilter == "all") {
          return <TodoItem id={id} toDo={task} status={status} controlsHandler={controlsHandler} key={i} />
        }
      }) : <li className="err">Nothing to show</li>}
    </ul>
  );
};

export default Todo;