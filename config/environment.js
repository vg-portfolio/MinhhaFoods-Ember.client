/* jshint node: true */

module.exports = function (environment) {
  'use strict';
  const ENV = {
    modulePrefix: 'minh-ha-foods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    googleFonts: [
      'Montserrat:400,500',
      'Kaushan+Script',
      'Lato:700',
      'Playfair+Display: 700'
    ],
    // viewportConfig: {
    //   viewportTolerance: {
    //     top    : 50,
    //     left   : 0,
    //     bottom : 50,
    //     right  : 0
    //   }
    // },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    let port = +('GA'.split('').reduce((p, c) =>
      p + c.charCodeAt().toString(16), '')
    );
    ENV.apiHost = `http://localhost:${port}`;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootUrl = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/';
    ENV.locationType = 'hash';
    ENV.apiHost = 'https://minha-api.herokuapp.com/';
  }

  return ENV;
};
