const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_url: "mongodb://localhost:27017",
            },
        };
    }

    return {
        env: {
            mongodb_url: "mongodb://localhost:27017",
        },
    };
};
