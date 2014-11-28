/*jslint browser: true, maxerr: 50, maxlen: 80 */

/*global define */

define(['log', 'ptp/ptp'], function (log, ptp) {
    'use strict';

    var onClicked, buttonEl = document.querySelector('.trigger.button');

    onClicked = function () {
        ptp.capture({
            storageId: 0, // optional
            objectFormatCode: 0, // optional
            onSuccess: function () {
                log.append('Capturing finished');
            },
            onFailure: function () {
                log.appendError('Capturing failed');
            }
        });

        log.append('Capturing…');
    };

    buttonEl.onclick = onClicked;

    return Object.create(null, {
        enableButton: {value: function () {
            buttonEl.classList.remove('disabled');
        }},
        disableButton: {value: function () {
            buttonEl.classList.add('disabled');
        }}
    });
});
