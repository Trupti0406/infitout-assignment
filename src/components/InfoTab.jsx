import React from "react";
import FilterIcon from "../Vector.png";

const InfoTab = () => {
  return (
    <div class="mx-5">
      <div class="row mt-4">
        <div class="col mb-3 mb-md-0">
          <form className="d-flex gap-2">
            <div
              class="form-group position-relative"
              style={{
                width: "135px",
              }}
            >
              <label
                className="position-absolute ms-2"
                style={{
                  bottom: "28px",
                  backgroundColor: "#fbfbfb",
                  fontSize: "10px",
                }}
              >
                Scrip
              </label>
              <input
                type="text"
                class="form-control rounded-0"
                value="NIFTY"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div
              class="form-group position-relative"
              style={{
                width: "135px",
              }}
            >
              <label
                className="position-absolute ms-2"
                style={{
                  bottom: "28px",
                  backgroundColor: "#fbfbfb",
                  fontSize: "10px",
                }}
              >
                Exp
              </label>
              <input
                type="text"
                class="form-control rounded-0"
                value="18 May 2023"
                style={{ fontSize: "14px" }}
              />
            </div>
          </form>
        </div>
        <div class="col mb-3 mb-md-0">
          <div className="d-flex flex-md-row list-unstyled justify-content-center gap-2 ">
            <div className="d-flex flex-column align-items-md-start">
              <div style={{ fontSize: "12px", color: "#888888" }}>Spot</div>
              <div>
                <span className=" fw-semibold" style={{ fontSize: "14px" }}>
                  18,245.3
                </span>
                <span
                  className="me-2 text-success"
                  style={{ fontSize: "12px" }}
                >
                  {" "}
                  0.35%
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-md-start">
              <div style={{ fontSize: "12px", color: "#888888" }}>Fut</div>
              <div>
                <span className=" fw-semibold" style={{ fontSize: "14px" }}>
                  18,251.1
                </span>
                <span
                  className="me-2 text-success"
                  style={{ fontSize: "12px" }}
                >
                  {" "}
                  0.35%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col mb-3 mb-md-0">
          <div className="d-flex align-items-center gap-3">
            <div>
              <div style={{ fontSize: "12px", color: "#888888" }}>Max pain</div>
              <div className=" fw-semibold" style={{ fontSize: "14px" }}>
                18,200
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#888888" }}>PCR</div>
              <div className=" fw-semibold" style={{ fontSize: "14px" }}>
                0.92
              </div>
            </div>
            <div>
              <div
                style={{ fontSize: "12px", color: "#888888" }}
                className="d-flex"
              >
                Support 1{" "}
                <span className="d-flex flex-column ms-1">
                  <i class="fa-solid fa-angle-up"></i>
                  <i class="fa-solid fa-angle-down"></i>
                </span>
              </div>
              <div className=" fw-semibold" style={{ fontSize: "14px" }}>
                18100
              </div>
            </div>
            <div>
              <div
                style={{ fontSize: "12px", color: "#888888" }}
                className="d-flex"
              >
                Resistance 1{" "}
                <span className="d-flex flex-column ms-1">
                  <i class="fa-solid fa-angle-up"></i>
                  <i class="fa-solid fa-angle-down"></i>
                </span>
              </div>
              <div className=" fw-semibold" style={{ fontSize: "14px" }}>
                18500
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-3 mb-md-0 d-flex align-items-center justify-content-center gap-3">
          <div>
            <img src={FilterIcon} alt="filter" />
            <span className="ms-2" style={{ fontSize: "14px" }}>
              Filters
            </span>
          </div>
          <button
            type="button"
            class="btn btn-primary position-relative rounded-0"
            style={{ width: "105px" }}
          >
            Basket
            <span
              class="text-black position-absolute top-0 start-100 translate-middle badge rounded-circle px-2"
              style={{ backgroundColor: "#f8eb77" }}
            >
              3
            </span>
          </button>
        </div>
      </div>
      <div class="row justify-content-center justify-content-md-end mt-md-2">
        <div class="col d-flex justify-content-center justify-content-md-end gap-5 gap-md-3">
          <button className="btn btn-primary" style={{ width: "88px" }}>
            LTP
          </button>
          <button className="btn btn-secondary" style={{ width: "88px" }}>
            Greeks
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
