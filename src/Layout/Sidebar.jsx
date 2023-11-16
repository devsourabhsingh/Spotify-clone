import React from "react";

const Sidebar = ({ newWidth, onClick }) => {
  return (
    <>
      <div className={`side-bar ${newWidth ? "width-5" : ""}`}>
        <div className="container  gap-4 pt-2 mx-auto">
          <button
            className="side-btn-border d-flex align-items-baseline gap-4"
            onClick={onClick}
          >
            <i
              className="bi bi-house-door-fill"
              style={{ color: "white", fontSize: "30px" }}
            ></i>
            {newWidth ? "" : <h5 className="new-head">Home</h5>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
