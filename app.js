const axios = require('axios');
// const clima = require('./controlador/clima');
const argv = require('yargs').options({
    nombre:{
        alias: 'n',
        desc: 'Nombre de ka ciudad para obtener el clima',
        demand: true
    }
}).argv;

const info = require('./controlador/info');
// const ubicacion = require('./controlador/ubicacion');
//  ubicacion.getCiudadLatLon(argv.nombre)
//      .then(console.log);
// clima.getClima(-0.19,-78.5)
//     .then(console.log);
info.getInfo(argv.nombre)
    .then(console.log);
