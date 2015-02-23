var heads                  = require("robohydra").heads,
    RoboHydraWebSocketHead = heads.RoboHydraWebSocketHead;

module.exports.getBodyParts = function() {
    return {
        webSocketHeads: [
            new RoboHydraWebSocketHead({
                path: '/.*',
                handler: function(req, socket) {
                    console.log("Hey, I received a connection from URL path " + req.url);
                    console.log("And I have a socket: " + socket);
                }
            })
        ]
    };
};
