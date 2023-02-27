import React, { useState } from "react";
import Alert from "./components/Alert";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeAlert = () => {};
  return (
    <div className="container">
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary me-5 mt-5"
      >
        Show modal!
      </button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Modal title"
      />
      <Alert type="danger" onDismiss={closeAlert} />
      <Alert type="success" onDismiss={closeAlert} />
    </div>
  );
}

export default App;
