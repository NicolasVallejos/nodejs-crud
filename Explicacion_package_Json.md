## Estructura del package.json


  "scripts": {
    
    "dev": "nodemon src/index.js --exec babel-node --ignore src/public",
    //El script dev utiliza nodemon para correr el inde.js que se encuentra en la carpta src ignorando los cambios de los archivos estaticos

    "build": "babel src -d dist && ncp src/public/index.html dist/public/index.html && ncp src/public/main.css dist/public/main.css",
    // El script build, empaqueta la aplicacion dentro de la carpeta dist utilizando Babel para adaptar la aplicacion a navegadores mas antiguos, lo agregue por que me parecio interesante

    "start": "node dist/index.js"

    // y el script start ejecuta el codigo ya empaquetado, previamente ejecutando el build para crear o actualizar la carpeta dist, y arranca la aplicacion. Si bien el dev ya arranca la aplicacion con nodemon lo use para hacer pruebas y deje la aplicacion final con el script start
  },