import { useEffect, useState } from "react";
import obtenerInformacion from "./fetchInfo";
import Modal from "./Modal";
import NoticiasCard from "./NoticiaCard";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    obtenerInformacion().then((data) => setNoticias(data));
  }, []);
  const suscribirModal = () => {
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null);
    }, 1000);
  };
  const abrirNoticia = (noticia: INoticiasNormalizadas) => {
    setModal(noticia);
  };

  const cerrarModal = () => {
    setModal(null);
  };

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.length > 0 &&
          noticias.map((noticia) => (
            <NoticiasCard
              key={noticia.id}
              noticia={noticia}
              onClick={() => abrirNoticia(noticia)}
            />
          ))}
        <Modal modal={modal} cerrar={cerrarModal} suscribir={suscribirModal} />
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
