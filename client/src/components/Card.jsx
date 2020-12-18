import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";
import { FaExpandAlt, FaWindowClose } from "react-icons/fa";
const DrinkCard = ({
  strDrink,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strInstructions,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
}) => {
  // States
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: "233px" }} className="m-auto ">
      <CardImg
        top
        style={{ width: "100%", height: "233px" }}
        src={strDrinkThumb}
        alt={strDrink}
      />
      <CardBody>
        <CardTitle className="card-title">{strDrink}</CardTitle>
        <Button onClick={toggle}>
          <FaExpandAlt />
        </Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            {strDrink}
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>
              <FaWindowClose />
            </span>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img
              src={strDrinkThumb}
              alt={strDrink}
              style={{ height: "233px" }}
            />
            <div>
              <p>
                {strIngredient1}: {strMeasure1} <br />
                {strIngredient2}: {strMeasure2} <br />
                {strIngredient3}: {strMeasure3} <br />
                {strIngredient4}: {strMeasure4} <br />
                {strIngredient5}: {strMeasure5}
              </p>
            </div>
          </div>
          <div className="mt-3">{strInstructions}</div>
        </div>
      </Modal>
    </Card>
  );
};

export default DrinkCard;
