import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const ToDo = ({ text }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default ToDo;
