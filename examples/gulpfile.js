/**
 * gulp-qn - gulpfile.js
 * Created by mengdesen on 15/4/13.
 */

'use strict';

var gulp = require('gulp');
var qn = require('../');
gulp.task('default', function () {
    gulp.src('./js/*')
        .pipe(qn({
            qiniu: {
                accessKey: '',
                secretKey: '',
                bucket: 'xdemo',
                domain: 'http://7xik9a.com1.z0.glb.clouddn.com'
            },
            prefix: 'gmap'
        }));
});