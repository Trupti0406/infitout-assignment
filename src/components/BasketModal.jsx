import React from "react";

const BasketModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdropBasket"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog rounded-0"
        style={{
          maxWidth: "618px",
        }}
      >
        <div
          className="modal-content rounded-0"
          style={{
            fontSize: "12px",
            boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="modal-header rounded-0 d-flex justify-content-between align-itmes-center bg-primary text-white"
            style={{ height: "58px" }}
          >
            <div className="d-flex flex-column">
              <span>Max profit</span>
              <span>24,000/-</span>
            </div>
            <div className="d-flex flex-column">
              <span>Max loss</span>
              <span>Unlimited</span>
            </div>
            <div className="d-flex flex-column">
              <span>Risk:Reward</span>
              <span>NA</span>
            </div>
            <div className="d-flex flex-column">
              <span>Probability</span>
              <span>32%</span>
            </div>
            <div className="d-flex flex-column">
              <span>Breakeven</span>
              <span>&gt; 28124.2</span>
            </div>
          </div>
          <div className="modal-body py-2 px-0">
            <div className="table-responsive">
              <table className="table table-striped basket-table mb-5">
                <tr className="text-secondary mb-3 ">
                  <th className="fw-normal ps-1">Instrument</th>
                  <th className="fw-normal ">B/S</th>
                  <th className="fw-normal ">Type</th>
                  <th className="fw-normal ">Qty</th>
                  <th className="fw-normal ">Price</th>
                  <th className="fw-normal ">Trigger</th>
                  <th className="fw-normal "></th>
                </tr>

                <tbody>
                  <tr>
                    <td className="fw-bold ps-3">NIFTY 18MAY23 18200 CE</td>
                    <td>
                      <span className="border fw-bold px-1 me-1 bg-primary-subtle">
                        B
                      </span>
                    </td>
                    <td>
                      <div
                        className="border fw-bold px-1 me-1 bg-primary text-white text-center"
                        style={{ width: "46px" }}
                      >
                        MIS
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border border border-secondary-subtle"
                        style={{ width: "60px" }}
                        value="50"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border border border-secondary-subtle"
                        value="120.5"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="border border border-secondary-subtle"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      <span className="me-2 text-primary">
                        <i className="fa-solid fa-circle-plus me-1"></i>SL
                      </span>
                      <span className="me-2 text-primary">
                        <i className="fa-solid fa-circle-plus me-1"></i>Tgt
                      </span>
                      <span className="text-secondary">
                        <i className="fa-regular fa-trash-can me-1"></i>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold">NIFTY 18MAY23 18200 PE</td>
                    <td>
                      <span className="border fw-bold px-1 me-1 bg-danger-subtle">
                        S
                      </span>
                    </td>
                    <td>
                      <div
                        className="border fw-bold px-1 me-1 bg-primary text-white text-center"
                        style={{ width: "46px" }}
                      >
                        NRML
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border border border-secondary-subtle"
                        style={{ width: "60px" }}
                        value="50"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border border border-secondary-subtle"
                        value="98.1"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="border border border-secondary-subtle"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      <span className="me-2 text-primary">
                        <i className="fa-solid fa-circle-plus me-1"></i>SL
                      </span>
                      <span className="me-2 text-primary">
                        <i className="fa-solid fa-circle-plus me-1"></i>Tgt
                      </span>
                      <span className="text-secondary">
                        <i className="fa-regular fa-trash-can me-1"></i>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold">NIFTY 18MAY23 19200 CE</td>
                    <td>
                      <span className="border fw-bold px-1 me-1 bg-primary-subtle">
                        B
                      </span>
                    </td>
                    <td>
                      <div
                        className="border fw-bold px-1 me-1 bg-primary text-white text-center"
                        style={{ width: "46px" }}
                      >
                        MIS
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border border border-secondary-subtle"
                        style={{ width: "60px" }}
                        value="50"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border border border-secondary-subtle"
                        value="80.3"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="border border border-secondary-subtle"
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>
                      <span className="me-2 text-primary">
                        <i className="fa-solid fa-circle-plus me-1"></i>SL
                      </span>
                      <span className="me-2 text-primary">
                        <i className="fa-solid fa-circle-plus me-1"></i>Tgt
                      </span>
                      <span className="text-secondary">
                        <i className="fa-regular fa-trash-can me-1"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer mt-5 d-flex justify-content-between">
            <div>
              <div>Margin required: 2,43,630.3</div>
              <div>Available funds: 12,00,000,00</div>
            </div>
            <div>
              <button type="button" className="btn btn-warning rounded-0">
                <i className="fa-solid fa-circle-plus me-1"></i> Auto hedge
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-primary rounded-0 me-1"
                data-bs-dismiss="modal"
              >
                Close basket
              </button>
              <button type="button" className="btn btn-primary rounded-0 ms-1">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
