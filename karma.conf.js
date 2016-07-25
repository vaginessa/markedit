module.exports = function(config) {
    config.set({
        basePath: '',
        autoWatch: true,
        frameworks: ['mocha'],
        files: [
            'builds/markedit.js',
            'tests/index.test.js'
        ],
        plugins: [
            'karma-coverage',
            'karma-mocha',
            'karma-phantomjs-launcher'
        ],

        browsers: ['PhantomJS'], // , 'Firefox'],

        reporters: ['progress', 'coverage'],
        preprocessors: {'builds/markedit.js': ['coverage'] },

        singleRun: true,

        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcovonly', subdir: 'lcov' },
                { type: 'cobertura', subdir: 'cobertura' }
            ],
            instrumenters: { isparta : require('isparta') },
            instrumenter: {
                '**/*.es6': 'isparta'
            }
        }
    });
};
