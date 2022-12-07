import { INoticiasNormalizadas } from "./Noticias";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";
type PropsModal = {
  modal: INoticiasNormalizadas | null;
  cerrar: () => void;
  suscribir: () => void;
};
const Modal = ({ modal, cerrar, suscribir }: PropsModal) => {
  const esPremium = modal?.esPremium;
  return modal !== null ? (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={cerrar}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal
          src={esPremium ? SuscribeImage : modal.imagen}
          alt={esPremium ? "mr-burns-excelent" : "news-image"}
        />
        <CotenedorTexto>
          <TituloModal>
            {esPremium ? "Suscríbete a nuestro Newsletter" : modal.titulo}
          </TituloModal>
          <DescripcionModal>
            {esPremium
              ? "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
              : modal.descripcion}
          </DescripcionModal>
          {esPremium ? (
            <BotonSuscribir onClick={suscribir}>
              Suscríbete
            </BotonSuscribir>
          ) : null}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  ) : null;
};

export default Modal;
