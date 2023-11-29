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
        className={`alert alert-dismissible fade show ${typeAlert} mt-3`}
        role="alert"
        data-aos="flip-up"
      >
        {content}
        {closeBtn ? (
          <button
            type="button"
            className="close"
            onClick={handleAlertClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        ) : null}
      </div>
    )
  );
}
