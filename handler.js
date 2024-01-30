"use strict";

const AWS = require('aws-sdk');
const axios = require("axios");


module.exports.hello = async (event) => {
  
  try {
      const res = await axios.get('https://swapi.py4e.com/api/people/1/', {})
      const respuestaText = JSON.stringify(res.data);
      
      return {
        statusCode: 200,
        body: 
          JSON.stringify(respuestaText)
      
        
      };
  } catch (e) {
      console.log(e)
      return {
          statusCode: 400,
          body: JSON.stringify(e)
      }
  }
  
  /*return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: "Go Serverless v3.0! Your function executed successfully!",
            input: event,
          },
          null,
          2
        ),
      };*/
};

module.exports.hello2 = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
  
};
