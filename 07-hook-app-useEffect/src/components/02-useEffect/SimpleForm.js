import React, { useEffect, useState } from "react";
import "./effects.css";
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  useEffect(() => {
    console.log("hey");
  }, []);
  useEffect(() => {
    console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  // es el mismo para los dos porque lo estoy manejando con el name del control
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      // propiedad computada
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-4">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SimpleForm;
