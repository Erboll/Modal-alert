import React, { useState } from "react";

interface Props {
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({ type, onDismiss }) => {
  const [alert, setAlert] = useState(true);

  let classNames = "mt-5 alert alert-" + type;

  let cancel = null;
  if (onDismiss === undefined) {
    cancel = null;
  } else {
    cancel = (
      <button onClick={() => setAlert(false)} className="btn ms-5">
        X
      </button>
    );
  }

  return (
    <div className={classNames} style={{ display: alert ? "block" : "none" }}>
      A simple {type} alert—check it out!
      {cancel}
    </div>
  );
};
export default Alert;
