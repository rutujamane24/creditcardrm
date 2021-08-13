import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

// const normalisedCardnumber=(value)=>{
//   return value.replace(/\s/g,"").match(/.{1,4}/g)?.join(" ").substr(0,19)||""
// }
const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const maskCardNumber = (cardNumber) => {
    let cardNumberArr = cardNumber.split('');
    cardNumberArr.forEach((val, index) => {
        if (index > 3 && index < 16) {
            if (cardNumberArr[index] !== ' ') {
                cardNumberArr[index] = '*';
            }
        }
    });

    return cardNumberArr.join("");
};

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={maskCardNumber(values.cardNumber)}
            preview={true}
          />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                id="cardName"
                data-testid="cardName"
                name="cardName"
                placeholder="Cardholder Name"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
                maxLength="16"
                
              
              />
            </Form.Group>
            {/* <input
            type="tel"
            inputMode="numeric"
            name="number"
            placeholder="Card Number"
            onChange={(event)=>{
const{value}=event.target
event.target.value=normalisedCardnumber(value)
            }} */}
           {/* // onChange={handleChange}
           // onFocus={handleFocus}
            //onkeyup={hideCardValue(values)}
             //maxlength="16"
          /> */}
            {/* <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleChange}
            onFocus={handleFocus}
            preview={false}
              onkeyup="hideCardValue(this)/> */}
          
            <Row>
              <Col>
              <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    data-testid="cardExpiration"
                    name="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
                </Col>
                <Col>
                 <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="cvc"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
              {/* <Col>
              
              </Col> */}
            </Row>
            <Row>
              <Col>
               
              </Col>
              <Col>
                {/* <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardPostalCode"
                    data-testid="cardPostalCode"
                    name="cardPostalCode"
                    placeholder="Postal Code"
                    value={values.cardPostalCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cpostal}
                  />
                </Form.Group> */}
              </Col>
            </Row>
            <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Validate
            </Button>
          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
