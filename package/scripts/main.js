/*jslint browser: true, maxerr: 50, maxlen: 80 */

/*global define */

define([
    'ptp/ptp', 'log', 'connect', 'trigger'
], function (ptp, log) {
    'use strict';

    ptp.onNoConnection = function () {
        log.appendError('No connection');
    };

    ptp.onError = function (msg) {
        log.appendError(msg);
    };
});
