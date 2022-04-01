import React from 'react';
import CardComentarioAfiliado from './CardComentarioAfiliado';
import ComentarioFields from '../../interfaces/ComentarioFields';
import FotoPerfil from '../../interfaces/FotoPerfil';
import { mount, unmount } from '@cypress/react'

describe('test component render attributes', () => {
    const fakeImagen: FotoPerfil = {
        url: "fake_foto.jpg",
        tags: new Array(),
        alt_text: "",
        content_type: "",
        description: "",
        title: "",
        uuid: ""
    };

    const fakeComment: ComentarioFields = {
        Nombre: "fake name",
        Usuario: "@fake",
        Imagen: fakeImagen,
        Contenido: "fake comentario",
        Likes: 500,
        Cargo: "",
        Titulo: ""
    };

    it('renders user name', () => {
        mount(<CardComentarioAfiliado comentario={fakeComment} />);
        cy.get('p').should('have.length', 2);
        cy.get('span').should('have.length', 2);
        cy.get('img').should('have.length', 1);

        cy.get('[data-testid="fotoPerfil"]').invoke('attr', 'src').should('eq', 'fake_foto.jpg');
        cy.get('[data-testid="nombreUsuario"]').should('contain', 'fake');

        cy.get('[data-testid="instagram"]').invoke('text').should('eq', '@fake   Tecla');
        cy.get('[data-testid="comentario"]').invoke('text').should((text) => {
            expect(text).eq('fake comentario');
        });
        cy.get('[data-testid="numeroLikes"]').invoke('text').then(parseInt).should((likes) => {
            expect(likes).eq(500);
        });
        unmount();
    });
    
    it('increase likes when press button like', () => {
        mount(<CardComentarioAfiliado comentario={fakeComment} />);
        cy.get('[data-testid="botonLike"]').click();
        cy.get('[data-testid="numeroLikes"]').invoke('text').then(parseInt).should((likes) => {
            expect(likes).eq(501);
        });
        unmount();
    });
});