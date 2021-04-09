import React from "react";
import { useHistory } from "react-router-dom";

function PaymentPage(props) {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    history.push("/paymentSuccess");
  }

  return (
    <>
      <h2>Dane karty</h2>
      <div className={"container m-2"}>
        <form onSubmit={handleSubmit}>
          <div className={"row"}>
            <div className={"col-md-4"}>
              <label htmlFor={"cardNumber"}>Numer karty:</label>
              <br />
              <input type={"text"} id={"cardNumber"} name={"cardnumber"} />
            </div>
            <div className={"col-md-4"}>
              <label htmlFor={"cvc"}>CVC:</label>
              <br />
              <input type={"text"} id={"cvc"} name={"cvc"} />
            </div>
          </div>
          <div className={"row mt-2"}>
            <div className={"col-md-4"}>
              <label htmlFor={"name"}>
                Imię i nazwisko:
                <br />
                <input type={"text"} id={"name"} name={"name"} />
              </label>
            </div>
            <div className={"col-md-4"}>
              <label htmlFor={"expires"}>Wygasa:</label>
              <br />
              <input type={"text"} id={"expires"} name={"expires"} />
            </div>
          </div>
          <div className={"row mt-4"}>
            <input
              type={"submit"}
              className={"btn btn-primary col-md-2"}
              value={"Zapłać"}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default PaymentPage;
