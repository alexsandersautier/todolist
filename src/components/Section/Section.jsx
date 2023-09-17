import React from "react";
import "./index.scss";
import Button from "../Button/Button";
const Section = ({ action, description }) => {

  return (
    <div className="card">
      {action === "edit" ? (
        <div className="card__cards">
          <h2>Do you want to edit this item?</h2>
          <p>{description}</p>
          <div className="card__buttons">
            <Button action="no" className=".btn"/>
            <Button action="yes" />
          </div>
        </div>
      ) : (
        <div className="card__cards">
          <h2>Do you want to delete this item?</h2>
          <p>{description}</p>
          <div className="card__buttons">
            <Button action="no"/>
            <Button action="yes" />
          </div>          
        </div>
      )}
    </div>
  );
};

export default Section;
