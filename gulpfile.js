/* init gulp plugins */ 
var     gulp        =   require('gulp'),
        gutil       =   require('gulp-util'),
        imageop     =   require('gulp-image-optimization'),
        gulpif      =   require('gulp-if');

var     devStatus   =   true;

// load plugins
var     $           =   require('gulp-load-plugins')(),

        sorc        =   'assets',
        sorcSass    =   [sorc + '/sass/*.scss'],
        sorcImg     =   'assets/img/**/*.{gif,jpg,png,svg}',
    
        destImg     =    'img',
        destSass    =    'css';

if  (devStatus === true) {
        sassStyle   =   'compact',
        imgOptLev   =   1
    }
else {
        sassStyle   =   'compressed',
        imgOptLev   =   5 
    };

gulp.task('style', function() { 
    return gulp.src(sorcSass)
        .pipe($.sass({
            errLogToConsole: true,
            outputStyle: sassStyle  
        }))
        .pipe($.autoprefixer('last 2 version', '> 5%', 'ie 8', {map: false}))
        .pipe(gulp.dest(destSass))
        .pipe($.size());
});


gulp.task('images', function(cb) {
    gulp.src(sorcImg)
    .pipe($.cache(
        imageop({
            optimizationLevel: imgOptLev,
            progressive: true,
            interlaced: true
        })
    ))
    .pipe(gulp.dest(destImg))
    .on('end', cb)
    .on('error', cb)
    .pipe($.size())
});


gulp.task('watch', function () {
    gulp.watch(sorcSass, ['style']);
    gulp.watch(sorcImg, ['images']);
});

gulp.task('build', function () {
    gulp.start('style');
    gulp.start('images');
});