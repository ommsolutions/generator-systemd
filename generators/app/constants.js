const SERVICE_NAME = 'servicename';
const DESCRIPTION = 'description';
const AFTER = 'after';
const REQUIRES = 'requires';
const TYPE = 'type';
const USER = 'user';
const ENVIRONMENT_FILE = 'environmentfile';
const EXEC_START = 'execstart';
const RESTART = 'restart';
const RESTART_SEC = 'restartsec';
const KILL_MODE = 'killmode';
const WANTED_BY = 'wantedby';

const PROMPTS = [
  {
    type: 'input',
    name: SERVICE_NAME,
    message: 'Enter the name of the service.\n\n',
    default: 'test'
  },
  {
    type: 'input',
    name: DESCRIPTION,
    message: '(Description=) Describe the service.\n\n',
    default: ''
  },
  {
    type: 'input',
    name: AFTER,
    message: '(After=) A space-separated list of unit names. This service startup will be delayed until all of the defined ' +
    'units did start up if they are started at the same time. \n\n',
    default: undefined
  },
  {
    type: 'input',
    name: REQUIRES,
    message: '(Requires=) Defines required dependencies.  If this unit gets activated, the units listed here will be ' +
    'activated as well. If one of the other units gets deactivated or its activation fails, ' +
    'this unit will be deactivated. \n\n',
    default: undefined
  },
  {
    type: 'rawlist',
    pageSize: 10,
    name: TYPE,
    message: '(Type=) Configures the process start-up type for this service unit. Documentation can be found here: ' +
    'https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=\n\n',
    choices: ['simple', 'forking', 'oneshot', 'dbus', 'notify', 'idle'],
    default: 'simple'
  },
  {
    type: 'input',
    name: USER,
    message: '(User=) Set the UNIX user or group that the processes are executed as.\n\n',
    default: undefined
  },
  {
    type: 'input',
    name: ENVIRONMENT_FILE,
    message: '(EnvironmentFile=) Allows to provide environment variables from a file. More information can be found here: ' +
    'https://www.freedesktop.org/software/systemd/man/systemd.exec.html#EnvironmentFile=\n\n',
    default: undefined
  },
  {
    type: 'input',
    name: EXEC_START,
    message: '(ExecStart=) Commands with their arguments that are executed when this service is started. More information can be found here: ' +
    'https://www.freedesktop.org/software/systemd/man/systemd.service.html#ExecStart=\n\n',
    default: undefined
  },
  {
    type: 'rawlist',
    pageSize: 10,
    name: RESTART,
    message: '(Restart=) Configures whether the service shall be restarted when the service process exits, is killed or a timeout is reached.' +
    ' More information can be found here: https://www.freedesktop.org/software/systemd/man/systemd.service.html#Restart=\n\n',
    choices: ['no', 'on-success', 'on-failure', 'on-abnormal', 'on-watchdog', 'on-abort', 'always'],
    default: 'no'
  },
  {
    type: 'input',
    name: RESTART_SEC,
    message: '(RestartSec=) Configures the time to sleep before restarting a service (as configured with Restart=). Unitless value in seconds.\n\n',
    default: undefined
  },
  {
    type: 'rawlist',
    pageSize: 10,
    name: KILL_MODE,
    message: '(KillMode=) Specifies how processes of this unit shall be killed. More information can be found here: ' +
    'https://www.freedesktop.org/software/systemd/man/systemd.kill.html#KillMode=\n\n',
    choices: ['control-group', 'process', 'mixed', 'done'],
    default: 'control-group'
  },
  {
    type: 'input',
    name: WANTED_BY,
    message: '(WantedBy=) The current unit will be started when the listed unit is started.\n\n',
    default: 'multi-user.target'
  }
];

module.exports = {
  SERVICE_NAME,
  DESCRIPTION,
  AFTER,
  REQUIRES,
  TYPE,
  USER,
  ENVIRONMENT_FILE,
  EXEC_START,
  RESTART,
  RESTART_SEC,
  KILL_MODE,
  WANTED_BY,
  PROMPTS
};
