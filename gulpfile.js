const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const files = 'src/js/*.js';
const desiredDestination = '.';

gulp.task('scripts', () => {
	return gulp.src(files)
	.pipe(concat('brand.js'))
	.pipe(gulp.dest(desiredDestination))
	.pipe(rename('brand.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(desiredDestination))
});

var pump = require('pump');

gulp.task('uglify-error-debugging', function (cb) {
  pump([
    gulp.src(files),
    uglify(),
    gulp.dest(desiredDestination)
  ], cb);
});
