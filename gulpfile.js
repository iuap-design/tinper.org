var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var path = require('path');

var basePath = path.resolve(process.cwd(),'node_modules/tinper-neoui/');
var sassPath = path.resolve(basePath,'scss/ui/*.scss');
var customPath = path.resolve(basePath,'custom');

gulp.task('default',function(){
    return gulp.src(sassPath)
        .pipe(sass())
        .pipe(gulp.dest(customPath))
})
