function Modal({ state, toggleModal }) {
  console.log("got modal state:", state);
  const handleChange = () => {};
  return (
    <div
      className="modal flex-box"
      style={{ visibility: state ? "visible" : "hidden" }}
      onClick={() => toggleModal(false)}
    >
      <div
        className="card modal-item flex-box"
        style={{ flexDirection: "column" }}
      >
        <div
          className="flex-box"
          style={{ alignSelf: "space-between", paddingLeft: "10px" }}
        >
          <h2 className="flex-item">Edit Todo</h2>

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
        <input
          className="card todo-input"
          type="text"
          id="fname"
          name="fname"
          placeholder="Type here..."
          // value=''
          onChange={handleChange}
        />
        <button
          className="card button"
          style={{ alignSelf: "flex-end", marginRight: "10px" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Modal;
