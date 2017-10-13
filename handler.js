// 'use strict';

// module.exports.hello = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   callback(null, response);

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };

import { helloService } from './services/helloService';

export const helloLambda = (event, context, callback) => {

  const result = helloSvc({name: 'Serverless'});

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: result,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

  callback(null, response);
};

export default {
  helloLambda
}
