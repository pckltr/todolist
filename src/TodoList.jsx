import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodos: PropTypes.func.isRequired,
};

export default function TodoList({ todos, toggleTodo, deleteTodos }) {
  return (
    <>
      <ul>
        {todos.length === 0 && <li>No todos</li>}
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodos={deleteTodos}
            />
          );
        })}
      </ul>
    </>
  );
}
