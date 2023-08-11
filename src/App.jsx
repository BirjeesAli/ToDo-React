import { useState } from "react";
import ButtonCmpt from "./components/Button.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TodoItem from "./components/TodoItem.jsx";
import AddTodo from "./components/AddTodo.jsx";
import { v4 as uuid } from "uuid";
import Modal from "./components/Modal.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [head, setHead] = useState("Amazing things To Do!");
  const [modalDisplay, setmodalDisplay] = useState(true);

  console.log(todos);
  console.log(modalDisplay);

  const toggleModal = (state) => {
    setmodalDisplay(state);
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { name: todo, completed: false, id: uuid() }]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.filter((element) => {
        if (element.id === id) element.name = newTodo;
        return element;
      })
    );
  };

  const markTodo = (e, id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <>
      <Navbar heading={head} />
      <Modal state={modalDisplay} toggleModal={toggleModal} />
      <div className="container">
        <h1>Add New ToDo</h1>
        <AddTodo addTodo={addTodo} />
        <br />
        {/* {!!todos.length && } */}
        {!todos.length && (
          <h1>Nothing remains to do, Add new ones to remeber...</h1>
        )}

        {!!todos.length && (
          <>
            <h1>Don't Forget to do the followings</h1>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                markTodo={markTodo}
                todo={todo}
                toggleModal={toggleModal}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
