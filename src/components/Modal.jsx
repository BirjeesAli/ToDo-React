import { useRef } from "react";

function Modal({ state, setmodalDisplay, editedTodo, setEditedTodo }) {
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setEditedTodo((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChangeSave = () => {
    setEditedTodo({ id: todo.id, name: todoText });
  };

  return (
    <div
      className="modal flex-box"
      ref={modalRef}
      style={{ display: state ? "flex" : "none" }}
      onClick={(e) => {
        if (modalRef.current === e.target) setmodalDisplay(false);
      }}
    >
      <div
        className="card modal-item flex-box"
        style={{ flexDirection: "column", paddingLeft: "10px" }}
      >
        <div
          className="flex-box"
          style={{
            width: "99%",
            justifyContent: "space-between",
            paddingLeft: "5px",
          }}
        >
          <h2 className="flex-item">Edit Todo</h2>

          <button
            className="card del-btn"
            onClick={() => setmodalDisplay(false)}
          >
            <a style={{ fontSize: "30px" }}>&#215;</a>
          </button>
        </div>
        <input
          className="card todo-input flex-item"
          type="text"
          id="fname"
          name="fname"
          placeholder="Type here..."
          value={editedTodo.name}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="card button"
          style={{ alignSelf: "flex-end" }}
          onClick={handleChangeSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Modal;
