import React from "react";
import "../../Estilos/SeccionPreguntas.css";
import SeccionRespuestasEstd from "./SeccionRespuestasEstd";

const PreguntasEstudiantes = () => {
  return (
    <div data-spy="scroll" className=" cuerpoPreguntas">
      <div className="container-fluid row ">
        <SeccionRespuestasEstd />
      </div>
    </div>
  );
};

export default PreguntasEstudiantes;
