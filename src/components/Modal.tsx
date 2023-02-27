import React from "react";
import Backdrop from "./Backdrop";

interface Props {
  show: boolean;
  onClose: React.MouseEventHandler;
  title: string;
}

const Modal: React.FC<Props> = ({ show, onClose, title }) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button onClick={onClose} className="btn-close"></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam dolores excepturi possimus, asperiores non sunt quaerat
                harum earum iste adipisci quasi cupiditate eaque ad consectetur
                minus corrupti officiis ab! Repellat! Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Omnis, quisquam molestias
                neque natus error odit perspiciatis! Impedit molestias voluptas
                facilis vero quae aperiam quidem vitae est eos odit veritatis
                fuga accusamus, quis veniam deserunt odio assumenda sit
                accusantium mollitia eveniet.
              </p>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
