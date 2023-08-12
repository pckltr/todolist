import PropTypes from "prop-types";

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodos: PropTypes.func.isRequired,
};

export default function TodoItem({
  completed,
  id,
  title,
  color,
  toggleTodo,
  deleteTodos,
}) {
  return (
    <li
      key={id}
      className="todo"
      onClick={() => toggleTodo(id, !completed)}
      style={{
        backgroundColor: color ? color : "black",
        opacity: completed ? 0.5 : 1,
      }}
    >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />

        <span
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {title}
        </span>
      </label>
      <button onClick={() => deleteTodos(id)} className="btn">
        X
      </button>
    </li>
  );
}
