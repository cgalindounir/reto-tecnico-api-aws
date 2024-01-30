  const AWS = require('aws-sdk');
  const listarPersonajesBD = async(event) =>  {
      try {
          const dynamodb = new AWS.DynamoDB.DocumentClient();
          // scan es como hacer un fetch de toda la tabla
          const result = await dynamodb.scan({
              TableName: 'gente'
          }).promise();
          const personajes = result.Items;

          return {
              status: 200,
              body: {
                  personajes
              }
          };
      } catch(error) {
          console.log(error);
      }   
  }
  module.exports = {
      listarPersonajesBD
  }
