import { useState } from "react";

export default function ({ onClose, content, typeAlert, closeBtn }) {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose();
  };

  return (
    showAlert && (
      <div
        className={`alert alert-dismissible fade show ${typeAlert} mt-3 alertArea`}
        role="alert"
        data-aos="flip-up"
      >
        <b>{content}</b>
        {closeBtn ? (
          <button
            type="button"
            className="close btn btn-danger"
            onClick={handleAlertClose}
            aria-label="Close"
          >
            <span aria-hidden="true" className="">&times;</span>
          </button>
        ) : null}
      </div>
    )
  );
}
