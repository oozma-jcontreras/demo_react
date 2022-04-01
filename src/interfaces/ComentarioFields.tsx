import FotoPerfil from './FotoPerfil';

export default interface ComentarioFields {
    Nombre: string,
    Titulo: string,
    Usuario: string,
    Imagen: FotoPerfil,
    Contenido: string,
    Likes: number,
    Cargo: string
}