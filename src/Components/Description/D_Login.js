import React from "react";
import { Link } from "react-router-dom";

function D_Login() {
  return (
    <div className="Contenedor2">
      <div class="Ingresar">
        <h2>Ingresar</h2>
        <p>Ingresa tu nombre y tu contraseña</p>
        <form>
          <input 
            type="text" 
            name="Nombre_Usuario" 
            placeholder="Nombre" 
          />{" "}
          <br />
          <input
            type="number"
            name="Nombre_Usuario"
            placeholder="Contraseña"
          />{" "}
          <br />
          <p>Olvide mi contraseña</p>
          <button type="button" class="btn-secondary">
            <Link to="/home_page"> Ingresar </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
export default D_Login;
