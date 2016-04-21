'use strict';

var   gulp = require('gulp'),

	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	rename = require('gulp-rename');

gulp.task("concatJS", function(){
	return gulp.src([
		'public/js/jquery-1.11.3.min.js',
		'public/js/foundation.min.js', 
		'public/js/script.js'])
	.pipe(concat("scriptbundle.js"))
	.pipe(gulp.dest("public/js"));
});

gulp.task("minifyJS", ["concatJS"], function(){
	return gulp.src("public/js/scriptbundle.js")
		.pipe(uglify())
		.pipe(rename('scriptbundle.min.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task("concatCSS", function(){
	return gulp.src([
		'public/css/foundation.min.css', 
		'public/css/styles.css',
		])
	.pipe(concat("stylesbundle.css"))
	.pipe(gulp.dest("public/css"));
});

gulp.task("minifyCSS", ["concatCSS"], function(){
	return gulp.src("public/css/stylesbundle.css")
		.pipe(cleancss())
		.pipe(rename('stylesbundle.min.css'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('default', ['minifyJS', 'minifyCSS']);