const AWS = require('aws-sdk');
const axios = require('axios');

const getPersonaje = async(event) =>  {
  try {
      const { id } = event.pathParameters;
      
      const res = await axios.get('https://swapi.py4e.com/api/people/'+id+'', {})
      const respuestaText = JSON.stringify(res.data);
      
      var respuesta = JSON.parse(respuestaText);

      var nombre = respuesta.name;
      var masa = respuesta.mass;
      var altura = respuesta.height;
      var color_cabello = respuesta.hair_color;
      var color_piel = respuesta.skin_color;
      var color_ojos = respuesta.eye_color;
      var anio_nacimiento = respuesta.birth_year;
      var genero = respuesta.gender;
      var mundo = respuesta.homeworld;
      var peliculas = respuesta.films;
      var especies = respuesta.species;
      var vehiculos = respuesta.vehicles;
      var navesestelares = respuesta.starships;
      var creado = respuesta.created;
      var editado = respuesta.edited;
      var url = respuesta.url;
      
      var info = {
        "nombre": nombre,
        "altura": altura,
        "masa": masa,
        "color_cabello": color_cabello,
        "color_piel": color_piel,
        "color_ojos": color_ojos,
        "anio_nacimiento": anio_nacimiento,
        "genero": genero,
        "mundo": mundo,
        "peliculas": peliculas,
        "especies": especies,
        "vehiculos": vehiculos,
        "navesestelares": navesestelares,
        "creado": creado,
        "editado": editado,
        "url": url
      }
      
      return {
        statusCode: 200,
        body: 
          respuestaText
      
        
      };
  } catch (e) {
      console.log(e)
      return {
          statusCode: 400,
          body: JSON.stringify(e)
      };
  }   
};
module.exports = {
  getPersonaje
}
