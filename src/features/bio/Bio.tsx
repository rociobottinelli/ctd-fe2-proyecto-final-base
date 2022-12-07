import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styled from "styled-components";

interface BotonProps{
  esActivo: boolean
}

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
const ContenedorBotones = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
const BioImagen = styled.img`
  max-width: 200px;
  max-height: 300px;
  margin-bottom: 1rem;
`;
const BioNombre = styled.h3`
  font-size: 2em;
  margin-bottom: 1rem;
`;
const BioDescripcion = styled.p`
  font-size: 1.3em;
  width: 70%;
  margin: 1rem auto;
`;

const Boton = styled.button<BotonProps>`
  border-radius: 5px;
  border: 1px solid darkgray;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  margin: 1rem;
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.4rem;
  &:hover {
    cursor:pointer;
  }
  background-color: ${(props) => (props.esActivo? "#fdd835" : "none")};
  color: ${(props) => (props.esActivo? "whitesmoke" : "none")};
  color: ${(props) => (props.esActivo? "whitesmoke" : "none")};
  text-shadow: ${(props) => (props.esActivo? "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000": "none")};
`

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Boton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        esActivo = {
          bioActiva.id === nombre
            ? true
            : false
        }
      >
        {nombre}
      </Boton>
    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
