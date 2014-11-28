/*jslint browser: true, maxerr: 50, maxlen: 80 */

/*global require */

require.config({
    baseUrl: 'scripts',
    shim: {

    },
    paths: {
        ptp: '../bower_components/ptp.js/scripts',
        requirejs: '../bower_components/requirejs/require',
        'font-awesome': '../bower_components/font-awesome/fonts/*'
    },
    packages: [

    ]
});

require(['main']);
