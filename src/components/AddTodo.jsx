import { useState } from "react";

function AddTodo(props) {
  const [btn, setBtn] = useState("none");
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    props.addTodo(todo);
    setBtn("none");
    setTodo("");
  };

  const handleClick = (event) => {
    setTodo(event.target.value);
    if (event.target.value === "") {
      setBtn("none");
    } else {
      setBtn("block");
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
          display: btn,
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
