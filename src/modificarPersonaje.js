const AWS = require('aws-sdk');

const modificarPersonaje = async(event) =>  {

    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        // Extraer valores recibidos a través del evento:
        const { id,nombre,altura,masa,color_cabello } = JSON.parse(event.body);
        
        var info = {
            "id": id,
            "nombre": nombre,
            "altura": altura,
            "masa": masa,
            "color_cabello": color_cabello
          }

        const result = await dynamodb.update({
            TableName: 'gente',

            // Setear cada uno de los valores
            UpdateExpression: 'set nombre = :nombre, altura = :altura, masa = :masa, color_cabello = :color_cabello ',
            ExpressionAttributeValues: {                
                ':nombre': nombre,
                ':altura': altura,
                ':masa': masa,
                ':color_cabello': color_cabello
                
            },

            // Indicar el id que debe modificar:
            Key: { id },

            // Retornar el valor actual:
            ReturnValues: 'ALL_NEW'

        }).promise();

        return {
            status: 200,
            body: 
                JSON.stringify(info)
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
    modificarPersonaje
}
