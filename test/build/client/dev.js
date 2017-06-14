const WebpackClientBuilder = require('../../../lib/client');
const WebpackBaseBuilder = require('../base');
class ClientDevBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setEggWebpackPublicPath();
    this.setDevTool(false);
    this.setCssExtract(false);
  }
}
module.exports = new ClientDevBuilder().create();
