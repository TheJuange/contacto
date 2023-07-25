import { PropTypes } from "prop-types";
import { Contacto } from "../../models/contact.class.js";
import { useState } from "react";

export function ComponenteB({ contacto }) {
  const [conect, setConect] = useState(contacto.conectado);

  return (
    <div>
      <h1>Nombre: {contacto.nombre}</h1>
      <h2>Apellido: {contacto.apellido}</h2>
      <h3>Email: {contacto.email}</h3>
      <h4>Contacto: {conect ? "En Linea" : "No Disponible"}</h4>
      <button
        onClick={() => {
          setConect(!conect);
        }}
      >
        {conect ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
}

ComponenteB.protoType = {
  contacto: PropTypes.instanceOf(Contacto),
};
