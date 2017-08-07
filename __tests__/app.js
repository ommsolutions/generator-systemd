'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const TEMP_DIR = path.join(__dirname, 'temp');
const DEFAULT_NAME = 'test.service';

/**
 * Test suite for the whole project
 */
describe('-- generator-systemd --', function () {
  /**
   * Test suite for the default generator which uses the defaults.
   */
  describe('generator-systemd-DEFAULT', function () {
    /**
     * Checks if all files were generated.
     */
    describe('Checking file generation', function () {
      it('should have generated file: test.service', () => wrapAssertFile());
    });

    describe('Checking file content', function () {
      const unitRegex = /\[Unit]/g;
      const serviceRegex = /\[Service]/g;
      const installRegex = /\[Install]/g;
      const commentRegex = /#/;
      const typeRegex = /Type=simple/g;
      const restartRegex = /Restart=no/g;
      const killModeRegex = /KillMode=control-group/g;
      const wantedByRegex = /WantedBy=multi-user.target/g;
      const defaultTestDescriptionRegex = /WantedBy=multi-user.target/g;
      it('Should contain Unit', () => wrapAssertFileContent(unitRegex));
      it('Should contain Service', () => wrapAssertFileContent(serviceRegex));
      it('Should contain Install', () => wrapAssertFileContent(installRegex));
      it('Should contain "#" in front of directives with no defaults specified by this generator',
        () => wrapAssertFileContent(commentRegex));
      it('Should contain Type default', () => wrapAssertFileContent(typeRegex));
      it('Should contain Restart default', () => wrapAssertFileContent(restartRegex));
      it('Should contain KillMode default', () => wrapAssertFileContent(killModeRegex));
      it('Should contain WantedBy default', () => wrapAssertFileContent(wantedByRegex));
      it('Should contain default test description', () => wrapAssertFileContent(defaultTestDescriptionRegex));
    });
  });
});

// ######### HELPERS #########
function run() {
  return helpers.run(path.join(__dirname, '../generators/app'), {tmpdir: false})
    .inDir(TEMP_DIR)
    .withPrompts({
      description: 'default settings applied'
    });
}

function wrapAssertFile() {
  return run().then(() => assert.file([DEFAULT_NAME]));
}

/**
 * Assert some regex content for the generated systemd service unit
 * @param regexToExpect The regex to match with
 * @returns {Promise} Resolves if the regex matches, rejects with the stack otherwise.
 */
function wrapAssertFileContent(regexToExpect) {
  return run().then(() =>
    assert.fileContent(DEFAULT_NAME, regexToExpect));
}
// ######### HELPERS END #########
