import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    RUT: "",
    mail: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    const regexTel = /^\x2b569[0-9]{8}$/i;
    const regexMail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    const regexRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

    if(!data.nombre && !data.apellido && !data.telefono && !data.RUT && !data.mail) return;
    else if(!regexTel.test(data.telefono)) alert("Su teléfono no es válido")
    else if(!regexMail.test(data.mail)) alert("Su mail no es válido");
    else if(!regexRut.test(data.RUT)) alert("Su Rut no es válido");
    console.log("nombre: ", data.nombre);
    console.log("apellido: ", data.apellido);
    console.log("Teléfono: ", data.telefono);
    console.log("RUT: ", data.RUT);
    console.log("mail: ", data.mail);
  };

  return (
    <Fragment>
      <div className="contenedor d-flex flex-column align-items-center">
        <form className="form m-auto p-3" onSubmit={sendData}>
          <h1 className="text-center mb-1 title">Ingresar</h1>
          <label className="label-title">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa nombre"
            className="form-control mb-1"
            onChange={handleInputChange}
          ></input>
          <label className="label-title">Apellido</label>
          <input
            type="text"
            name="apellido"
            placeholder="Ingresa Apellido"
            className="form-control mb-1"
            onChange={handleInputChange}
          ></input>
          <label className="label-title">Teléfono</label>
          <input
            type="text"
            name="telefono"
            placeholder="+56XXXXXXXXX"
            className="form-control mb-1"
            onChange={handleInputChange}
          ></input>
          <label className="label-title">Rut</label>
          <input
            type="text"
            name="RUT"
            placeholder="X.XXX.XXX-X"
            className="form-control mb-1"
            onChange={handleInputChange}
          ></input>
          <label className="label-title">E-mail</label>
          <input
            name="mail"
            placeholder="Ingresa E-mail"
            className="form-control mb-1"
            onChange={handleInputChange}
          ></input>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
