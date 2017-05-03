/**
* @name hmr-service
* @summary Message Relay Service
* @description Hydra Message Relay - a simple microservice which replies to WebSocket messages received via Hydra-router.
*/
'use strict';

/**
* Load configuration file and initialize Hydra.
*/
let config = {};
const hydra = require('hydra');
hydra.init(`${__dirname}/config/config.json`, false)
  .then((newConfig) => {
    config = newConfig;
    return hydra.registerService();
  })
  .then((serviceInfo) => {
    let logEntry = `Started ${hydra.getServiceName()} (v.${hydra.getInstanceVersion()})`;
    console.log(logEntry);
    console.log(serviceInfo);
    hydra.on('message', (message) => {
      hydra.sendReplyMessage(message, {
        bdy: {
          message: `Message reply to mid (${message.mid}) by ${config.hydra.serviceName} instance ${hydra.getInstanceID()}`
        }
      });
    });
  })
  .catch((err) => {
    console.log('err', err);
    hydra.shutdown();
    process.exit(-1);
  });
