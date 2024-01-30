  const AWS = require('aws-sdk');
  const borrarPersonaje = async(event) =>  {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = JSON.parse(event.body);      
        const result = await dynamodb.delete({
            TableName: 'gente',          
            Key: { id }
        }).promise();
        return {
            status: 200,
            body: JSON.stringify({
                message: 'Personaje borrado'
            })
        };
    } catch(e) {
        console.log(e);
    }    
  };
  module.exports = {
    borrarPersonaje
  }
