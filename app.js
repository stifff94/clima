const axios = require('axios')

const argv = require('yargs').options({
    nombre: {
        alias: "n",
        desc: "nombre ciudad para obtener clima",
        demand: true
    }

}).argv;

const ciudad = encodeURI(argv.nombre)
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
    headers: { "X-RapidAPI-Key": "ea164cc3admshce81769bb029b06p1d2f9ejsn57543c2faebd" }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0])
    }).catch(err => {
        console.log("ERROR:", err)
    })