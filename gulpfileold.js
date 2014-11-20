
gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules{,/**}']).pipe(jshint()).pipe(jshint.reporter(stylish))
})



gulpif = require('gulp-if'),
    browserify = require('gulp-browserify'),
    prefix = require('gulp-autoprefixer'),
    minifyHTML = require('gulp-minify-html'),
    // changed = require('gulp-changed'),

    // cache = require('gulp-cache'),
    open = require("gulp-open"),
    fileinclude = require('gulp-file-include'),
/*
gulp.task('html', function() {
    gulp.src('html/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe( notify({ message: "HTML tasks have been completed!"}) );
});
 */
// URL task
gulp.task('url', function() {
    var options = {
        url: "http://localhost:3000",
    app: "chrome"
    };
    gulp.src('html/index.html')
      .pipe(open("", {app: "chrome", url: "http://localhost:3000"}))
      .pipe(plumber());
});
 /*
// browserSync task
gulp.task('browser-sync', function() {
    browserSync( ['html/*.html','html/css/*.css','builds/development/js/*.js' ],{
        server: {
            baseDir: "html/"
        }
    });
});


*/


// scripts task
// uglifies
gulp.task('scripts', function() {
   gulp.src(jsSources)
      .pipe(concat('script.js'))
      .pipe(browserify())
      .pipe(gulpif(env === 'production', uglify()))
      .pipe(gulp.dest(outputDir +'js') )
      .pipe(plumber())
      .pipe( notify({ message: "Scripts tasks have been completed!"}) );
});
 
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------


/* init gulp plugins */ 
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),       
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),   
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    notify = require('gulp-notify'),
    newer = require('gulp-newer');
/*    browserSync = require('browser-sync'),
    reload      = browserSync.reload;      */

/* set variables */ 
var jsSources,
    sassSources,
    imgSources,
    imgDest;


/* state of developing */ 
/*
env = process.env.NODE_ENV || 'development';
*/ 
/*
if (env === 'development'){
/*  outputDir = 'html/';                        REMOVE*/ /*
  sassStyle = 'expanded';
} else {

/*  outputDir = 'builds/production/';           REMOVE*/ /*
  sassStyle = 'compressed';
}

*/
/* sorces */ 
var    jsSources   =   ['assets/js/**/*.js'];
var     sassSources =   ['assets/sass/**/*.scss'];
var imgSources  =   ['assets/img/**/*.*'];
/* destination */ 
var imgDest     =   ['img'];


/*
htmlSources = [outputDir + '*.html'];
                                                REMOVE*/

**************************************
**************************************
**************************************
**************************************
**************************************
    

/* https://gist.github.com/antonioOrtiz/2bf2e27b8e0a23115034 */
/* npm install gulp gulp-if gulp-uglify gulp-util gulp-ruby-sass gulp-concat gulp-plumber gulp-browserify gulp-autoprefixer gulp-minify-html gulp-imagemin imagemin-pngcrush gulp-changed gulp-newer gulp-cache gulp-open gulp-file-include gulp-notify browser-sync  --save-dev */
var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    browserify = require('gulp-browserify'),
    prefix = require('gulp-autoprefixer'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    // changed = require('gulp-changed'),
    newer = require('gulp-newer'),
    // cache = require('gulp-cache'),
    open = require("gulp-open"),
    fileinclude = require('gulp-file-include'),
    notify = require('gulp-notify');
 
var browserSync = require('browser-sync'),
    reload      = browserSync.reload;

var env,
    jsSources,
    htmlSources,
    sassSources,
    outputDir;
 
env = process.env.NODE_ENV || 'development';
 
if (env === 'development'){
  outputDir = 'html/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}
 
jsSources = ['components/js/*.js'];
htmlSources = [outputDir + '*.html'];
sassSources = ['html/scss/**/*.scss'];
 
gulp.task('fileinclude', function() {
    // content
    gulp.src('html/index.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('html/'))
    .pipe( notify({ message: "fileInclude tasks have been completed!"}) );
 
});
gulp.task('html', function() {
    gulp.src('html/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe( notify({ message: "HTML tasks have been completed!"}) );
});
 
// URL task
gulp.task('url', function() {
    var options = {
        url: "http://localhost:3000",
    app: "chrome"
    };
    gulp.src('html/index.html')
      .pipe(open("", {app: "chrome", url: "http://localhost:3000"}))
      .pipe(plumber());
});
 
// browserSync task
gulp.task('browser-sync', function() {
    browserSync( ['html/*.html','html/css/*.css','builds/development/js/*.js' ],{
        server: {
            baseDir: "html/"
        }
    });
});
 

// scripts task
// uglifies
gulp.task('scripts', function() {
   gulp.src(jsSources)
      .pipe(concat('script.js'))
      .pipe(browserify())
      .pipe(gulpif(env === 'production', uglify()))
      .pipe(gulp.dest(outputDir +'js') )
      .pipe(plumber())
      .pipe( notify({ message: "Scripts tasks have been completed!"}) );
});
 