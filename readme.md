![Logo](https://conasa.grupocibernos.com/hubfs/Cibernos%20Feb%202018/image/favicon-1.png)


# Prueba Técnica :bookmark_tabs:

Esta es la solución de la prueba técnica asignada por la empresa Cibernos Group. Se realiza una prueba para validar el año del primer proceso automático y tomar un screenshot de la página wikipedia.

## Índice

1. Requisitos previos
2. Configuración del proyecto
3. Ejecución de las pruebas
4. Estructura del proyecto

## Requisitos Previos

Node.js (versión recomendada).
Install Cypress.
Install axios.

## Configuración del Proyecto.

Ejercicio 2: Automatización de una web
1. Install Node.js

https://nodejs.org/es/download

2. Install Cypress
```bash 
npm install cypress --save-dev
```
Ejercicio 3: Tratamiento de datos en APIs
1. Install axios.

```bash 
npm install axios 
```

## Ejecución de las pruebas.

Ejercicio 2: Automatización de una web
```bash
- npm run cypress:runner
```
Ejercicio 3: Tratamiento de datos en APIs
```bash
- node petshop.js 
```

## Estructura del Proyecto.

Ejercicio 2: Automatización de una web
```bash
cypress/
|-- e2e/
|   |-- features/
|       |-- Wikipedia.feature
|-- step_definitions
|       |-- Wikipedia.js
|-- pages/
|   |   |-- HomePage.js
|   |   |-- ResultPage.js
|   |   |-- ResultWiki.js
|-- screenshot/
|   |   |-- capture.png
|-- support/
```

Ejercicio 3: Tratamiento de datos en APIs
```bash
node ejercicio3/petshop.js
```