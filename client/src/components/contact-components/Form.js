import React from "react";

const Form = () => {
  return (
    <div>
      <form className="form">
        <div className="form__group">
          <label className="form__label">Name</label>
          <input className="form__input"></input>
        </div>
        <div className="form__group">
          <label className="form__label">Email</label>
          <input className="form__input"></input>
        </div>
        <div className="form__group">
          <label className="form__label">Message</label>
          <input className="form__input form__input--message"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
