const Base = require('../app/index');

module.exports = class HomeBridgeGenerator extends Base {
  initializing() {
    super.initializing();
  }

  prompting() {
    return super.prompting();
  }

  writing() {
    this.fs.copy(
      this.templatePath('homebridge.service'),
      this.destinationPath('homebridge.service')
    );

    this.fs.copy(
      this.templatePath('homebridge.opts'),
      this.destinationPath('homebridge.opts')
    );
  }
};
