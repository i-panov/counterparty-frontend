"use strict";
function buildConfig(env) {
    return require('./' + env + '.webpack.config.js')({ env: env });
}
module.exports = buildConfig;
//# sourceMappingURL=webpack.config.js.map