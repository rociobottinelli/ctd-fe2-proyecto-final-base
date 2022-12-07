import { INoticiasNormalizadas } from "./Noticias";
import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from "./styled";

type PropsCard = {
  noticia: INoticiasNormalizadas;
  onClick: () => void;
};
const NoticiasCard = ({ noticia, onClick }: PropsCard) => {
  return (
    <TarjetaNoticia key={noticia.id}>
      <ImagenTarjetaNoticia src={noticia.imagen} />
      <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {noticia.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={onClick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};
export default NoticiasCard;