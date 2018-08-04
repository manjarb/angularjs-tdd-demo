module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],
        preprocessors: {
          'app/**/*.js': ['coverage']
        },
        coverageReporter: {
          includeAllSources: true,
          reporters: [
              {
                  type: 'html',
                  dir: 'test/coverage',
                  subDir: '.'
              },
              {
                  type: 'text'
              }
          ]
        },
        files: [
            "node_modules/angular/angular.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "node_modules/chai/chai.js",
            "app/**/*.js",
            "test/*.js"
        ],
        plugins: [
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-mocha-reporter'
        ]
    });
}