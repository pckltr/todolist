import { useState } from "react";
import PropTypes from "prop-types";

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default function NewTodoForm({ onSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTodo) return;
    onSubmit(newTodo);
    setNewTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <label htmlFor="newTodo">New todo</label>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        id="newTodo"
        className="new-todo-input"
      />
      <button className="btn">Add</button>
    </form>
  );
}
