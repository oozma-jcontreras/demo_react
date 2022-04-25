import React, { useState } from 'react';
import { DsIcon } from '../ds-components';
import ComentarioFields from '../../interfaces/ComentarioFields';
import './CardComentarioAfiliado.css';

interface CardProps {
    comentario: ComentarioFields
}

const CardComentarioAfiliado = (props: CardProps) => {
    const [comentario, setComentario] = useState(props.comentario);
    const darLike = () => {
        setComentario({ ...comentario, Likes: comentario.Likes + 1 });
    }

    return (
        <div className="card m-5" >
            <div className="card-header">
                <div className="row">
                    <div className="col-4">
                        <img data-testid="fotoPerfil" src={comentario.Imagen?.url} className="w-100" alt=""></img>
                    </div>
                    <div className="col-8">
                        <p data-testid="nombreUsuario">{comentario.Nombre}</p>
                        <p data-testid="instagram">{comentario.Usuario}   Tecla</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <span data-testid="comentario">{comentario.Contenido}</span>
            </div>
            <div className="card-footer d-flex justify-content-start d-flex align-items-center">
                <DsIcon data-testid="botonLike" onclick={darLike} size="s2" color="trabajadores" icon-name="icon-thumb-up-alt" class="hand-pointer"></DsIcon>
                <span data-testid="numeroLikes">{comentario.Likes}</span>
            </div>
        </div>
    )
}

export default CardComentarioAfiliado;
