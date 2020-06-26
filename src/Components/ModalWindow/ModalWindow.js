import React from 'react';

import "./ModalWindow.css";

function ModalWindow(props) {
  return (
    <div className="modal-background">
      <div className="modal">
      {props.children}
      </div>
    </div>
  );
}

export default ModalWindow;
