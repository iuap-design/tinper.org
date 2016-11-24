var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var path = require('path');
var fs = require('fs');
var basePath = path.resolve(process.cwd(),'node_modules/tinper-neoui/');


/**
 * 处理themecolors
 */
var themePath = path.resolve(basePath, 'scss/core/minxin-themeColors.scss')
var corData = fs.readFileSync(themePath, 'utf-8');
var corNewData = corData.replace(/(\$color-primary: ).*(;)/g,`$1"THEMETEST"$2`);
fs.writeFileSync(themePath,corNewData, 'utf-8');



var sassPath = path.resolve(basePath,'scss/ui/*.scss');
var customPath = path.resolve(basePath,'custom');

gulp.start('default',function(){
    return gulp.src(sassPath)
        .pipe(sass())
        .pipe(gulp.dest(customPath))
})
