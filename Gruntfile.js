module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify"]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./builds/markedit.js": ["./index.js"],
                    "./tests/index.test.js": ["./tests/es6/index.test.es6"]
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'builds/markedit.css': 'src/scss/app.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'builds/markedit.min.css': ['builds/markedit.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'builds/markedit.min.js': ['builds/markedit.js']
                }
            }
        },
        copy: {
            example: {
                files: [{
                    expand: true,
                    cwd: 'builds/',
                    src: ['**'],
                    dest: 'examples/'
                }, {
                    expand: true,
                    cwd: 'builds/',
                    src: ['markedit.js', 'markedit.css', 'markedit.min.js', 'markedit.min.css', 'fonts'],
                    dest: 'dist/'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'examples/*.css',
                        'examples/*.html',
                        'examples/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './examples'
                }
            }
        },
        eslint: {
            target: ['src/es6/*.es6']
        },
        mocha: {
            test: {
                src: ['tests/index.html']
            }
        },
        watch: {
            scripts: {
                files: ["./src/es6/*.es6", "./src/scss/*.scss", "./index.js", './tests/es6/*.es6'],
                tasks: ["build"]
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask("ci", ["eslint", "browserify", "mocha", "uglify", "cssmin", "copy"]);
    grunt.registerTask("build", ["eslint", "browserify", "mocha", "sass", "uglify", "cssmin", "copy"]);
    grunt.registerTask("default", ["browserSync", "watch"]);
};
