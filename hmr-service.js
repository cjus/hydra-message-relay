/**
* @name hmr-service
* @summary Message Relay Service
* @description Hydra Message Relay - a simple microservice which replies to WebSocket messages received via Hydra-router.
*/
'use strict';

const hydra = require('hydra');
let config = hydra.getConfigHelper();

/**
* Load configuration file and initialize hydraExpress app
*/
let main = async () => {
  try
  {
    await config.init('./config/config.json');
    let newConfig = await hydra.init(config.getObject(), false);
    config = newConfig;
    let serviceInfo = await hydra.registerService();
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
  } catch (e) {
    console.log('err', err);
    hydra.shutdown();
    process.exit(-1);
  }
}

main();

