function TodoItem({
  deleteTodo,
  markTodo,
  todo,
  setmodalDisplay,
  setEditedTodo,
}) {
  const handleEdit = () => {
    setEditedTodo({ id: todo.id, name: todo.name });
    setmodalDisplay(true);
  };
  return (
    <div className="flex-box">
      <button
        className="card button"
        disabled={todo.completed}
        onClick={handleEdit}
      >
        Edit
      </button>
      <div
        className="card todo-text"
        style={
          todo.completed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
        onClick={() => markTodo(todo.id)}
      >
        <a style={{ transition: "text-decoration 0.8s ease-in" }}>
          {todo.name}
        </a>
      </div>
      <button className="card del-btn" onClick={() => deleteTodo(todo.id)}>
        <a style={{ fontSize: "30px" }}>&#215;</a>
      </button>
    </div>
  );
}

export default TodoItem;
