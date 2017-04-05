# Message relay service
Hydra Message Relay - a simple microservice which replies to WebSocket messages received via Hydra-router.

This project includes a tiny Hydra microservice which is used for testing WebSocket messaging sent to HydraRouter and routed to this service. A sample web page, `websocket-test.html` is included to help send WebSocket messages.

This service requires the following:

* A Redis instance for Hydra to use
* A Hydra-Router
* This service running

The entire microservice source code is contained in the `hmr-service.js` file.

The following article examines Hydra messaging in greater detail:

* [Building a Microservices Example Game with Distributed Messaging](https://community.risingstack.com/building-a-microservices-example-game-with-distributed-messaging/)
