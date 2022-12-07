import { useState } from "react";
import { BioContainer, BioDescripcion, BioImagen, BioNombre, Boton, ContenedorBotones } from "./bio.styled";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";


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
