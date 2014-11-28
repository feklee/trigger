// Run with: node.js
//
// First package is optimized using r.js, then it is compressed into a zip
// file.

/*jslint node: true, maxerr: 50, maxlen: 80, nomen: true, unparam: true */

'use strict';

var path = require('path'),
    createZip,
    onOptimizeSuccess,
    onTmpDirSuccess,
    onCreateZipSuccess,
    onProcessHtmlSuccess,
    onError;

onError = function (err) {
    console.error('Error:', err);
};

onCreateZipSuccess = function (zipPath) {
    console.log('Created: ' + zipPath);
};

onProcessHtmlSuccess = function (optimizedPackagePath) {
    require('./lib/create-zip')({
        optimizedPackagePath: optimizedPackagePath,
        onSuccess: onCreateZipSuccess,
        onError: onError
    });
};

onOptimizeSuccess = function (optimizedPackagePath) {
    require('./lib/process-html')({
        optimizedPackagePath: optimizedPackagePath,
        onSuccess: onProcessHtmlSuccess,
        onError: onError
    });
};

onTmpDirSuccess = function (tmpDirPath) {
    require('./lib/optimize')({
        optimizedPackagePath: path.resolve(tmpDirPath, 'package'),
        onSuccess: onOptimizeSuccess
    });
};

require('./lib/create-tmp-dir')({
    onSuccess: onTmpDirSuccess,
    onError: onError
});
