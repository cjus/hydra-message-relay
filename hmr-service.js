/**
* @name hmr-service
* @summary Message Relay Service
* @description Hydra Message Relay - a simple microservice which replies to WebSocket messages received via Hydra-router.
*/
'use strict';

const version = require('./package.json').version;
let config = require('fwsp-config');

/**
* Load configuration file and initialize Hydra.
*/
config.init('./config/config.json')
  .then(() => {
    const hydra = require('hydra');
    config.version = version;
    hydra.init(config)
      .then(() => hydra.registerService())
      .then((_serviceInfo) => {
        let logEntry = `Starting ${config.hydra.serviceName} (v.${config.version})`;
        console.log(logEntry);
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
      });
  });
