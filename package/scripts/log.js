/*jslint browser: true, maxerr: 50, maxlen: 80 */

/*global define */

define(function () {
    'use strict';

    var append, appendError, olEl = document.querySelector('section.log ol');

    append = function (msg, spanClass) {
        var spanEl = document.createElement('span'),
            liEl = document.createElement('li');

        if (spanClass) {
            spanEl.classList.add(spanClass);
        }

        spanEl.appendChild(document.createTextNode(msg));

        liEl.appendChild(spanEl);

        olEl.insertBefore(liEl, olEl.firstChild);
    };

    appendError = function (msg) {
        append(msg, 'error');
    };

    return Object.create(null, {
        append: {value: append},
        appendError: {value: appendError}
    });
});
