import React, { useState } from "react";
import './FormCardCredit.css';
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const FormCardCredit = ({handleOrder}) => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  const handleSubmitCard = (e) =>{
      e.preventDefault();
      handleOrder();
  }

  return (
    <>
      <div clasName="rccs__card rccs__card--unknown">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>

      <br />
      <form onSubmit={handleSubmitCard}>
        <div className="form-card-container">
          <div>
            <div className="form-data-item">
              <label for="name">Número de la tarjeta</label>
              <input
                type="tel"
                className="form-control"
                value={number}
                name="number"
                maxlength="16"
                pattern="[0-9]+"
                onChange={(e) => {
                  SetNumber(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="form-data-item">
              <label for="name">Nombre del titular: </label>
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="form-data-item">
              <label for="month">Expira: </label>
              <select
                className="form-control"
                name="expiry"
                onChange={handleDate}
              >
                <option value=" ">Mes</option>
                <option value="01">Ene</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Abr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Ago</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dic</option>
              </select>
            </div>

            <div className="form-data-item">
              <select
                className="form-control"
                name="expiry"
                onChange={handleExpiry}
              >
                <option value=" ">Año</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
              </select>
            </div>
          </div>

          <div className="row">
            
            <div className="form-data-item">
            <div>
              <label for="cvv">CVV</label>
            </div>

              <input
                type="password"
                name="cvc"
                maxlength="3"
                className=" form-control card"
                value={cvc}
                pattern="\d*"
                onChange={(e) => {
                  SetCvc(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="btn"
          value="Confirmar Pago"
        />
      </form>
    </>
  );
};
export default FormCardCredit;
