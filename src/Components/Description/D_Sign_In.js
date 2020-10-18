import React from "react";
import { Link } from "react-router-dom";

function D_Sign_In() {
  return (
    <div className="Contenedor2">
      <div class="Registrarse">
        <h2>Registrarse</h2>
        <p>
          Ingresa tu nombre y tu correo electronico. Agrega una contraseña que
          contenga una mayuscula, numeros y minimo 8 caracteres.
        </p>
        <form>
          <input 
            type="text" 
            name="Nombre_Usuario" 
            placeholder="Nombre" 
          />{" "}
          <br />
          <input 
            type="email" 
            name="Email_Usuario" 
            placeholder="E-Mail" 
          />{" "}
          <br />
          <input
            type="number"
            name="Contraseña_Usuario"
            placeholder="Contraseña"
          />{" "}
          <br />
          <input
            type="number"
            name="Contraseña_Usuario"
            placeholder="Confirme Contreseña"
          />{" "}
          <br /> <br />
          <button type="button" class="btn-secondary">
            <Link to="/login"> Registrarse </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
export default D_Sign_In;
