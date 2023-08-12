import { useRef, useState } from "react";

function Modal({
  state,
  setmodalDisplay,
  editedTodo,
  setEditedTodo,
  updateTodo,
}) {
  const modalRef = useRef(null);
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    setEditedTodo((prev) => ({ ...prev, name: e.target.value }));
    if (e.target.value === "") {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleChangeSave = () => {
    updateTodo(editedTodo.id, editedTodo.name);
    setmodalDisplay(false);
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
          disabled={valid ? false : true}
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
