import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import Header from "./Header";
import * as Constants from "./constants";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const initialTodos = Constants.INITIAL_TODO_LIST;
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      return savedTodos;
    }
    return initialTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function randomColor() {
    const colors = Constants.COLORS;
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
          color: randomColor(),
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodos(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function deleteCheckedTodos() {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => !todo.completed);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <Header listSize={todos.length} deleteCheckedTodos={deleteCheckedTodos} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodos={deleteTodos}
      ></TodoList>
    </>
  );
}
