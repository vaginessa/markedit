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
               "./dist/markedit.js": ["./index.js"],
               "./tests/index.test.js": ["./tests/es6/index.test.es6"]
            }
         }
      },
      sass: {
         dist: {
            files: {
               'dist/markedit.css': 'src/scss/app.scss'
            }
         }
      },
      copy: {
            example: {  files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**'],
                    dest: 'examples/'
                }]},
      },
      browserSync: {
         dev: {
            bsFiles: {
               src : [
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
      mocha: {
         test: {
            src: ['tests/index.html']
         }
      },
      watch: {
         scripts: {
            files: ["./src/es6/*.es6", "./src/scss/*.scss", "./index.js", './tests/es6/*.es6'],
            tasks: ["browserify", "sass", "mocha", "copy"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-browser-sync');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-mocha');

   grunt.registerTask("default", ["browserSync", "watch"]);
   grunt.registerTask("build", ["browserify", "sass", "mocha", "copy"]);
   grunt.registerTask("ci", ["browserify", "mocha", "copy"]);
};