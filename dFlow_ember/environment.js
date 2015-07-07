/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
	modulePrefix: 'd-flow-ember',
	environment: environment,
	baseURL: '/',
	locationType: 'hash',
	EmberENV: {
	    FEATURES: {
		// Here you can enable experimental features on an ember canary build
		// e.g. 'with-controller': true
	    }
	},

	APP: {
	    // Here you can pass flags/options to your application instance
	    // when it is created
	}
    };

    if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		ENV.APP.LOG_VIEW_LOOKUPS = true;
		ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
		ENV.APP.authenticationBaseURL = './session';
		ENV.APP.serviceURL = '.';
    }
    
    if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
		ENV.APP.authenticationBaseURL = process.env.DFLOW_URL+"/session";
		ENV.APP.serviceURL = process.env.DFLOW_URL;
    }

    if (environment === 'production-test') {
	  ENV.APP.authenticationBaseURL = './session';
	  ENV.APP.serviceURL = './';
    }

    return ENV;
};
