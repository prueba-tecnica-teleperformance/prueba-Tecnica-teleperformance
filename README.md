# PruebaTecnicateleperformance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
Construcción del Backent
Carpeta 'Servidor'
Para construir el backend que nos conecta con mongoDB desde la carpeta raiz Servidor se deben copiar los siguientes 5 archivos luego de descargar el repositorio "prueba-Tecnica-teleperformance-main" desde github.


1- config
2- controllers
3- models
4- routes
5- node_modules
6-package
Una vez se tengan las 6 carpetas dentro de el directorio raíz Servidor se debe ingresar a la carpeta packag y cortar los 4 archivos que se encuentran dentro para luego pegarlos en el directorio raíz Servidor; ya para finalizar abrir la carpeta en el ID de su preferencia y desde una ventana de comandos o terminal parado sobre el directorio Server correr el comando npm install node y al terminar correr el comando npm run dev para subir el servicio.
también es importante aclarar que el puerto del backend corre sobre el 4000 y la url de conexion a mongoDB se encuentra con usuario y clave en el archivo variables.env
Para el front solo seria en la carpeta "prueba-Tecnica-teleperformance-main" abrirla en un ID y desde la terminal parado en este directorio correr los comandos   npm install node y al terminar el comando ng serve -o para correr en local.


La aplicación tiene varias rutas para validar inicial mente los puntos de angular-material y bootstrap que son desde la url local generalmente "localhost:4200/angular-material" y "localhost:4200/bootstrap" las cuales son solo vistas sin ninguna funcionalidad en particular más que la de mostrar el uso de la librería angular-material y bootstrap, después la aplicación toma un giro pensando en agregar funcionalidad e ir implementando cada uno de los puntos haciendo uso del concepto de SPA y se crea una vista que es el home (vista inicial ) que permite listar una serie de productos en una tabla, desde don de se puede cargar una vista para crear un nuevo producto o eliminar un producto ya existente o modificarlo conectando al front con el back para cada petición y generando msg de información al usuario.
