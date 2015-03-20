var gulp = require('gulp'),
	clean = require('gulp-clean'),
	usemin = require('gulp-usemin'),
	uglify = require('gulp-uglify'),
	minifyHtml = require('gulp-minify-html'),
	rev = require('gulp-rev');

gulp.task('clean', function () {
	return gulp.src('build/', {read: false})
		.pipe(clean());
});

gulp.task('min', function () {
	return gulp.src('./public/index.html')
		.pipe(usemin({
			html: [minifyHtml({empty: true})],
			js: [uglify(), rev()]
		}))
		.pipe(gulp.dest('build/'));
});