function TodoItem({ deleteTodo, markTodo, todo, toggleModal }) {
  const handleEdit = () => {
    toggleModal(true);
  };
  return (
    <div className="flex-box">
      <button
        className="card button"
        disabled={todo.completed}
        // onClick={() => updateTodo(todo.id, "edited here xD...")}
        onClick={handleEdit}
      >
        Edit
      </button>
      <div
        className="card"
        style={
          todo.completed
            ? {
                textDecoration: "line-through",
                cursor: "pointer",
                userSelect: "none",
              }
            : { cursor: "pointer", userSelect: "none" }
        }
        onClick={(e) => markTodo(e, todo.id)}
      >
        {todo.name}
      </div>
      <button
        className="card button"
        style={{
          backgroundColor: "#d92424fa",
          borderColor: "#d92424fa",
          padding: "3px",
          width: "45px",
          height: "45px",
          borderRadius: "100%",
        }}
        onClick={() => deleteTodo(todo.id)}
      >
        <a style={{ fontSize: "30px" }}>&#215;</a>
      </button>
    </div>
  );
}

export default TodoItem;
