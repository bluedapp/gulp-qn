/**
 * gulp-qn - hash.js
 * Created by mengdesen on 15/4/13.
 * Copy https://github.com/hfcorriez/gulp-qiniu/blob/master/index.js
 */

'use strict';

var crypto = require('crypto');

module.exports = function(file){
    if (file.size > 1 << 22) return false;
    var shasum = crypto.createHash('sha1');
    shasum.update(file._contents);
    var sha1 = shasum.digest();
    var hash = new Buffer(1 + sha1.length);
    hash[0] = 0x16;
    sha1.copy(hash, 1);
    return hash.toString('base64').replace('+', '-').replace('/', '_');
};