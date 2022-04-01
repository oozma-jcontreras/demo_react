# Arquetipo para Widget Modyo en React

El arquetipo esta construido en React con Typescript y contiene las siguientes referencias:
- Modyo SDK para integración con Modyo
- @uikit que es el sistema de diseño de Caja los Andes

ds-components.tsx


## Ejecución del proyecto en local

```sh
npm start
```

## Ejecución de pruebas automatizadas

Para ejecutar pruebas unitarias en línea de comando, se debe ejecutar lo siguiente

```sh
npm run test
```

Si desea ejecutar las pruebas unitarias desde la interfaz gráfica de Cypress, ejecutar lo siguiente

```sh
npm run test-open
```

Para ejecutar pruebas end-to-end (E2E) en línea de comando, se debe ejecutar lo siguiente

```sh
npm run test-e2e
```

Si desea ejecutar las pruebas end-to-end (E2E) desde la interfaz gráfica de Cypress, ejecutar lo siguiente

```sh
npm run test-e2e-open
```

## Publicación en Modyo

```sh
npm run build
```

```sh
npm run modyo-push
```

```sh
npm run modyo-publish
```
