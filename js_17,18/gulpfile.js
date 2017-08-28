'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
const del = require('del');
var uglify = require('gulp-uglify');
var pump = require('pump');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

var path = {

    src: {
        html:'src/*.html',
        css:'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        fonts: 'src/fonts/**/*.*',
        img: 'src/img/**/*.+(png|jpg|gif|svg)'
    },
    build: {
        html:'build/',
        css:'build/css',
        js: 'build/js',
        fonts:'build/fonts',
        img: 'build/img'
    },
    watch: {
        html: 'src/**/*.html'
    },
    clean: './build'
};

var serverConfig = {
    server: {
        baseDir:'./build'
    },
    host:'localhost',
    port:9000,
    logPrefix: 'MyServer',
    open:false

};

gulp.task('bundleHtml', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task ('bundleCss', function () {
    return gulp.src(path.src.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleJS', function () {
    return gulp.src(path.src.js)
        .pipe ((concat('scripts.min.js')))
        .pipe(babel({presets: ['env']}))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('bundleFonts', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('bundleImg', function () {
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('webServer', function () {
    browserSync(serverConfig);
});

gulp.task ('watch', function () {
    gulp.watch(path.src.css, ['bundleCss']);
    gulp.watch(path.watch.html, ['bundleHtml']);
    gulp.watch(path.src.js, ['bundleJS']);
    gulp.watch(path.src.fonts, ['bundleFonts']);
    gulp.watch(path.src.img, ['bundleImg']);
});

gulp.task('clean:build', function() {
    return del.sync(path.clean);
});

gulp.task ('start', ['clean:build','bundleHtml', 'bundleCss', 'bundleJS', 'bundleFonts', 'bundleImg', 'webServer', 'watch']);