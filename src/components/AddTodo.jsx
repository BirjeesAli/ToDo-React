import { useState } from "react";

function AddTodo(props) {
  const [btn, setBtn] = useState("block");
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    props.addTodo(todo);
    setBtn("none");
    setTodo("");
  };

  return (
    <section className="flex-box">
      <input
        className="card todo-input"
        type="text"
        id="fname"
        name="fname"
        placeholder="Type here..."
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
          setBtn("block");
        }}
      />

      <button
        className="card button"
        onClick={handleAdd}
        style={{ display: btn }}
      >
        ADD
      </button>
    </section>
  );
}

export default AddTodo;
