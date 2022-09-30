import React from "react";

type CardProps = {};
const PaymentAddComponent = ({}: CardProps) => {
  return (
    <div>
      <div className="row justify-content-center mb-4 radio-group">
        <div className="col-sm-3 col-5">
          <div className="radio selected mx-auto" data-value="dk">
            {" "}
            <img
              className="fit-image"
              src="https://i.imgur.com/5TqiRQV.jpg"
              width="105px"
              height="55px"
            />{" "}
          </div>
        </div>
        <div className="col-sm-3 col-5">
          <div className="radio mx-auto" data-value="visa">
            {" "}
            <img
              className="fit-image"
              src="https://i.imgur.com/OdxcctP.jpg"
              width="105px"
              height="55px"
            />{" "}
          </div>
        </div>
        <div className="col-sm-3 col-5">
          <div className="radio mx-auto" data-value="master">
            {" "}
            <img
              className="fit-image"
              src="https://i.imgur.com/WIAP9Ku.jpg"
              width="105px"
              height="55px"
            />{" "}
          </div>
        </div>
        <div className="col-sm-3 col-5">
          <div className="radio mx-auto" data-value="paypal">
            {" "}
            <img
              className="fit-image"
              src="https://i.imgur.com/cMk1MtK.jpg"
              width="105px"
              height="55px"
            />{" "}
          </div>
        </div>{" "}
        <br />
      </div>
    </div>
  );
};

export default PaymentAddComponent;
