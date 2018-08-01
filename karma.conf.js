module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],
        files: [
            "node_modules/angular/angular.js",
            "node_modules/chai/chai.js",
            "app/**/*.js",
            "test/*.js"
        ],
        plugins: [
            'karma-mocha',
            'karma-phantomjs-launcher'
        ]
    });
}