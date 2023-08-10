function TodoItem({ deleteTodo, updateTodo, markTodo, todo }) {
  return (
    <div className="flex-box">
      <button
        className="card button"
        disabled={todo.completed}
        onClick={() => updateTodo(todo.id, "edited here xD...")}
      >
        Edit
      </button>
      <div
        className="card"
        style={
          todo.completed
            ? { textDecoration: "line-through", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={(e) => markTodo(e, todo.id)}
      >
        {todo.name}
      </div>
      <button
        className="card button"
        style={{ backgroundColor: "#d92424fa", borderColor: "#d92424fa" }}
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
