import React from "react";

const FilterModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        style={{
          height: "306px",
          width: "265px",
        }}
      >
        <div
          className="modal-content rounded-0"
          style={{
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Filters
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row justify-content-between mb-3">
              <span
                className="d-flex justify-content-start mb-1"
                style={{
                  fontSize: "12px",
                }}
              >
                LTP range
              </span>
              <div className="col">
                <input
                  type="text"
                  value="Minimum LTP"
                  style={{
                    width: "100px",
                    height: "30px",
                    fontSize: "12px",
                    border: "1px solid #D3D3D3",
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value="Maximum LTP"
                  style={{
                    width: "100px",
                    height: "30px",
                    fontSize: "12px",
                    border: "1px solid #D3D3D3",
                  }}
                />
              </div>
            </div>
            <div className="row justify-content-between mb-3">
              <div className="col">
                <p
                  className="mt-1"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  LTP change % by
                </p>
              </div>
              <div className="col">
                <select
                  className="form-select rounded-0"
                  style={{
                    width: "100px",
                    height: "30px",
                    fontSize: "12px",
                    border: "1px solid #D3D3D3",
                  }}
                >
                  <option selected>Today Open</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-between mb-3">
              <div className="col">
                <p
                  className="mt-1"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Specific strike
                </p>
              </div>
              <div className="col">
                <input
                  type="text"
                  style={{
                    width: "100px",
                    height: "30px",
                    fontSize: "12px",
                    border: "1px solid #D3D3D3",
                  }}
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col">
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Display
                </p>
              </div>
              <div className="col d-flex">
                <div
                  className="form-check form-check-inline"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Calls
                  </label>
                </div>
                <div
                  className="form-check form-check-inline"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    Puts
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-primary rounded-0">
              Reset
            </button>
            <button type="button" className="btn btn-primary rounded-0">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
