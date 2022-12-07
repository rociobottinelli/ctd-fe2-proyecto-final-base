import { obtenerNoticias } from "./fakeRest";

  const obtenerInformacion = async () => {
    const respuesta = await obtenerNoticias().then((res) =>
      res.map((noticia) => {
        const titulo = noticia.titulo
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - noticia.fecha.getTime()) / 60000
        );

        const noticiaNormalizada = {
          id: noticia.id,
          titulo,
          descripcion: noticia.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: noticia.esPremium,
          imagen: noticia.imagen,
          descripcionCorta: noticia.descripcion.substring(0, 100),
        };
        return noticiaNormalizada;
      })
    );
    return respuesta;
  };

export default obtenerInformacion;
