import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import TodoItem from "../components/TodoItem.jsx";
import AddTodo from "../components/AddTodo.jsx";
import { v4 as uuid } from "uuid";
import Modal from "../components/Modal.jsx";
import ReactDom from "react-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const [head, setHead] = useState("Amazing things To Do!");
  const [modalDisplay, setmodalDisplay] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ id: "", name: "" });

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

  const markTodo = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id !== id) return todo;
        const newTodo = { ...todo };
        newTodo.completed = !newTodo.completed;
        return newTodo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <>
      <Navbar heading={head} />
      <div style={{ position: "relative" }}>
        {ReactDom.createPortal(
          <Modal
            state={modalDisplay}
            setmodalDisplay={setmodalDisplay}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
            updateTodo={updateTodo}
          />,
          document.querySelector("#modal")
        )}
      </div>
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
                setmodalDisplay={setmodalDisplay}
                setEditedTodo={setEditedTodo}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
