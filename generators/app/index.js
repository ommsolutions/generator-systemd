'use strict';
const CONSTANTS = require('./constants');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

class BaseGenerator extends Generator {
  initializing() {
    this.log(yosay(
      'Welcome to the terrific ' + chalk.red('generator-systemd') + ' generator!'
    ));
    this.log('All files will be generated in the folder: "' + this.destinationRoot() + '"');
  }

  prompting() {
    return this.prompt(CONSTANTS.PROMPTS).then(props => {
      this.props = props;
    });
  }

  writing() {
    return this.fs.copyTpl(
      this.templatePath('name.service'),
      this.destinationPath(this.props[CONSTANTS.SERVICE_NAME] + '.service'),
      this.getResponses()
    );
  }

  end() {
    this.log('Generation finished successfully.');
    this.log('Check here for more information on systemd services: ' +
      'https://www.freedesktop.org/software/systemd/man/systemd.service.html#');
    this.log('your service', JSON.stringify(this.getResponses()));
  }

  getResponses() {
    return {
      description: this.props[CONSTANTS.DESCRIPTION] ?
        'Description=' + this.props[CONSTANTS.DESCRIPTION] : '# Description=',
      after: this.props[CONSTANTS.AFTER] ?
        'After=' + this.props[CONSTANTS.AFTER] : '# After=',
      requires: this.props[CONSTANTS.REQUIRES] ?
        'Requires=' + this.props[CONSTANTS.REQUIRES] : '# Requires=',
      type: this.props[CONSTANTS.TYPE] ?
        'Type=' + this.props[CONSTANTS.TYPE] : '# Type=',
      user: this.props[CONSTANTS.USER] ?
        'User=' + this.props[CONSTANTS.USER] : '# User=',
      envfile: this.props[CONSTANTS.ENVIRONMENT_FILE] ?
        'EnvironmentFile=' + this.props[CONSTANTS.ENVIRONMENT_FILE] : '# EnvironmentFile=',
      execstart: this.props[CONSTANTS.EXEC_START] ?
        'ExecStart=' + this.props[CONSTANTS.EXEC_START] : '# ExecStart=',
      restart: this.props[CONSTANTS.RESTART] ?
        'Restart=' + this.props[CONSTANTS.RESTART] : '# Restart=',
      restartsec: this.props[CONSTANTS.RESTART_SEC] ?
        'RestartSec=' + this.props[CONSTANTS.RESTART_SEC] : '# RestartSec=',
      killmode: this.props[CONSTANTS.KILL_MODE] ?
        'KillMode=' + this.props[CONSTANTS.KILL_MODE] : '# KillMode=',
      wantedby: this.props[CONSTANTS.WANTED_BY] ?
        'WantedBy=' + this.props[CONSTANTS.WANTED_BY] : '# WantedBy='
    };
  }
}

module.exports = BaseGenerator;
