const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
}

function comprimeJavaScript(){
    return gulp.src('./src/scripts/*js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}




exports.sass = compilaSass;
exports.default = function(){
        gulp.watch('./src/sass/*.scss',{ignoreInitial: false}, gulp.series(compilaSass));
        gulp.watch('./src/scripts/*js',{ignoreInitial: false}, gulp.series(comprimeJavaScript));
        gulp.watch('./src/img/*',{ignoreInitial: false}, gulp.series(comprimeImagens));
};
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;