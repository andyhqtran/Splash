  module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      clean: {
        html: '{*/,*/*/,*/*/*/}*.html',
        css: ['{*/,*/*/,*/*/*/,*/*/*/*/}*.css', '{*/,*/*/,*/*/*/,*/*/*/*/}*.map'],
        cache: '.sass-cache',
        npm: 'node_modules'
      },

      connect: {
        server: {
          options: {
            port: 3000,
            base: '.',
          }
        }
      },

      jade: {
        dev: {
          options: {
            pretty: true
          },
          files: {
            'index.html': 'index.jade'
          }
        }
      },

      sass: {
        dev: {
          options: {
            precision: 6,
            sourcemap: 'auto',
            style: 'expanded',
            trace: true
          },
          files: {
            'assets/css/splash.css': 'assets/scss/splash.scss'
          }
        }
      },

      postcss: {
        options: {
          map: true,
          processors: [
            require('autoprefixer')({
              browsers: ['last 2 versions', 'ie 8']
            })
          ]
        },
        dev: {
          src: 'assets/css/*.css'
        }
      },

      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        dev: {
          files: {
            'assets/css/splash.min.css': 'assets/css/splash.css'
          }
        }
      },

      watch: {
        options: {
          livereload: true,
          event: ['all']
        },
        configFiles: {
          files: ['Gruntfile.js'],
          options: {
            reload: true
          }
        },
        sass: {
          files: '{*/,*/*/,*/*/*/}*.{scss,sass}',
          tasks: ['sass', 'postcss', 'cssmin'],
        },
        jade: {
          files: '{*/,*/*/,*/*/*/}*.jade',
          tasks: ['jade'],
        }
      }
    });


    grunt.registerTask('default', ['connect:server', 'watch']);

  };