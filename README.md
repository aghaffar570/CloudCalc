# BasicAppSetup

A basic Web Application that
connects to a Postgres Database (Defaulted Name: pokedex)
and uses React for view rendering.

*Utilizes the MVC pattern

## Technologies

### FE
- react
- react-dom
- react-router-dom

### BE
- express
- pg
- pg-hstore
- sequelize
- postgresql

### Glue
- webpack
- babel

## Demo

First set up a postgreSQL DB on your local machine and create a database table with the name pokedex.

Begin with `npm install`

You can seed the DB with the given data in seed.js by `npm run seed` or inputing data manually.

Lastly, run app with `npm run start-dev` and view on browser.
