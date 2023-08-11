import { useState } from "react";

function AddTodo(props) {
  const [btn, setBtn] = useState("hidden");
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    props.addTodo(todo);
    setBtn("hidden");
    setTodo("");
  };

  const handleClick = (event) => {
    if (event.target.value !== "") {
      setTodo(event.target.value);
      setBtn("visible");
    } else {
      setBtn("hidden");
    }
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
        onChange={handleClick}
      />

      <button
        className="card button"
        onClick={handleAdd}
        style={{
          visibility: btn,
          padding: "3px",
          width: "45px",
          height: "45px",
          borderRadius: "100%",
        }}
      >
        <a style={{ fontSize: "30px" }}>&#43;</a>
      </button>
    </section>
  );
}

export default AddTodo;
