var RoboHydraHeadProxy = require("robohydra").heads.RoboHydraHeadProxy;

exports.getBodyParts = function() {
    return {
        heads: [
            new RoboHydraHeadProxy({
                mountPath: '/http',
                proxyTo: 'http://hcoder.org'
            }),

            new RoboHydraHeadProxy({
                mountPath: '/https',
                proxyTo: 'https://hcoder.org'
            })
        ]
    };
};
