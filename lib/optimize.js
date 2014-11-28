/*jslint node: true, maxerr: 50, maxlen: 80, nomen: true, unparam: true */

'use strict';

var requirejs = require('requirejs'),
    path = require('path'),
    config = {
        appDir: '../package/',
        baseUrl: 'scripts',
        name: 'main',
        include: ['bower_components/almond/almond.js'],
        insertRequire: ['main'],
        paths: {
            "ptp": "../bower_components/ptp.js/scripts"
        },
        removeCombined: true,
        wrap: true,
        useStrict: true,
        fileExclusionRegExp: /^\.|tests|\.sh$|require\.js/,
        optimizeCss: 'standard'
    };

module.exports = function (settings) {
    config.dir = settings.optimizedPackagePath;

    requirejs.optimize(config, function () {
        settings.onSuccess(settings.optimizedPackagePath);
    });
};
