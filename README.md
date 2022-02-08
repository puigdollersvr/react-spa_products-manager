# Gestor de productos - React

Ésta **SPA** o Single Page Application está desarrollada en **[React](https://es.reactjs.org/)**
y permite gestionar productos en base al modelo **CRUD**.

Los productos son almacenados y gestionados gracias a una **[REST API](https://github.com/puigdollersvr/express_products_rest_api)**.

Para su arquitectura se ha usado el patrón de diseño **Flux** 
mediante la libreria **[React Redux](https://react-redux.js.org/)**
y el patrón **Presentational and Container component**.

## Iniciar la aplicación - Docker requerido

Es necesario todo el contenedor de Docker con la base de datos y la REST API en Express.

    docker-compose build
    docker-compose up

## Scripts disponibles

En el directorio del proyecto, puedes usar:

### `npm start`

Inicia la APP en modeo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará cuando hagas modificaciones.

**Atención: El servidor de la API debe estar levantado y disponible en la URL correcta.**

### `npm run build`

Compila la app para producción en el directorio `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.

Ver sección "About" [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## Posibles mejoras
- Aplicar TDD