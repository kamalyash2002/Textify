import React from "react";

function Alert(props) {
  return (
    // if no alert then it will not show anything if there is the alert than it will not bt null
    props.alert &&
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
         {props.alert.type} :
        <strong>
         {props.alert.msg}

        </strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>
  );
}

export default Alert;
