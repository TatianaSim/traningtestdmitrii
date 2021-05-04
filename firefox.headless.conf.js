const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--window-size=1280,720, --headless, --disable-gpu']
            },
        }
    ],

   services: ['geckodriver'],

    ...base,
    ...hooks
}
