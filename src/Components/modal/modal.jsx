import "./Modal.css";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "backdrop active" : "backdrop"}
      onClick={() => setActive(false)}
    >
      <div className="modal">
        <button className="modal-close" onClick={(e) => e.stopPropagation()}>
          dsadas
        </button>
      </div>
    </div>
  );
};

export default Modal;
