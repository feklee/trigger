/*jslint node: true, maxerr: 50, maxlen: 80 */

/*global grunt */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            target: {
                rjsConfig: 'package/config.js'
            },
            options: {
                baseUrl: 'package/scripts'
            }
        },
        sass: {
            dist: {
                files: {
                    'package/stylesheets/app.css': 'package/sass/app.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: 'package/sass/*.scss',
                tasks: ['sass'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // TODO: Add package creation based on package-zip-creator/app.js

    grunt.registerTask('default', ['bower', 'sass']);
};
