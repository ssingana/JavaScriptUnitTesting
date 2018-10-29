// Karma configuration
// Generated on Mon Aug 21 2017 09:57:02 GMT+0530 (India Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['requirejs', 'qunit'],

        // list of files / patterns to load in the browser
        files: [
            'test/test-main.js',
            {pattern: 'libs/**/*.js', included: false},
            {pattern: 'viewModels/*.js', included: false},
            {pattern: 'viewModels/*.json', included: false},
            {pattern: 'test/*Test.js', included: false},
            {pattern: 'test/TestUtil.js', included: false},
            {pattern: 'node_modules/jquery-mockjax/src/jquery.mockjax.js', included: false},
                    //{pattern: 'node_modules/jquery/src/jquery.js', included: false}
        ],

        // list of files to exclude
        exclude: [
            'main.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'viewModels/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'testresults/coverage'
        },

        htmlReporter: {
            outputFile: 'testresults/report/unittestreport.html',
            pageTitle: 'Javascript Unit Test Report',
            subPageTitle: 'Testing Oracle JET Modules with Qunit',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
