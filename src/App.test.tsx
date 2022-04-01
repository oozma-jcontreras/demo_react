import React from 'react';
import { mount } from '@cypress/react'
import App from './App';

describe('test component render attributes', () => {
    cy.intercept('https://cajalosandes.modyo.cloud/api/content/spaces/trabajadores-ccla/types/Testimonios/entries?locale=es&per_page=100&page=1&meta.category=nuestros-afiliados', {
        "entries": [
            {
                "fields": {
                    "Cargo": "ProfeJOBS TECLA",
                    "Likes": 1283,
                    "Imagen": {
                        "url": "https://cloud.modyocdn.com/uploads/506ce351-621d-45bf-918f-2d098e433c39/original/claudiaUgarte.png",
                        "tags": [],
                        "uuid": "506ce351-621d-45bf-918f-2d098e433c39",
                        "title": "Claudia Ugarte",
                        "alt_text": null,
                        "description": null,
                        "content_type": "image/png"
                    },
                    "Nombre": "Claudia Ugarte Vial",
                    "Titulo": "Afiliación Empresas",
                    "Usuario": "@Clau.Vrria",
                    "Contenido": "\u003cp id=\"isPasted\"\u003e\u003c/p\u003e\u003cp\u003e\"Gracias a Caja los Andes somos la primera plataforma de reclutamiento y retención exclusivamente enfocada en instituciones educacionales (colegios, salas cuna, etc.) y profesores\" Claudia Ugarte Vial, ProfeJOBS TECLA\u003c/p\u003e"
                }
            }
        ]
    });

    it('renders user name', async () => {
        mount(<App />);
        cy.get('[data-testid=nombreUsuario]').should('have.length', 2);
    });
});