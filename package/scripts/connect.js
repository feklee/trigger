/*jslint browser: true, maxerr: 50, maxlen: 80 */

/*global define */

define(['log', 'trigger', 'ptp/ptp'], function (log, trigger, ptp) {
    'use strict';

    var onClicked, buttonEl = document.querySelector('.connect.button');

    onClicked = function () {
        var host = document.querySelector('input.host').value,
            port = parseInt(document.querySelector('input.port').value, 10);

        if (host === '') {
            log.appendError('Empty address');
            return;
        }

        if (isNaN(port) || !isFinite(port) || port < 0) {
            log.appendError('Bad port');
            return;
        }

        log.append('Connecting to ' + host + ':' + port + '…');
        ptp.host = host;
        ptp.port = port;
        ptp.clientName = 'Trigger';
        ptp.loggerOutputIsEnabled = true;
        // additional optional parameter: `clientGuid`
        ptp.onConnected = function () {
            log.append('Connected');
            trigger.enableButton();
            buttonEl.classList.add('disabled');
        };
        ptp.onDisconnected = function () {
            log.append('Disconnected');
            trigger.disableButton();
            buttonEl.classList.remove('disabled');
        };
        ptp.connect();
    };

    buttonEl.onclick = onClicked;
});
