var gulp = require('gulp')
	concat = require('gulp-concat'),
	development = true;

var paths = {
	node_module: './node_modules/',
	source :'./'
};

if (development) {

	paths.webroot= './';
}else{

	paths.webroot= './';
}

paths.templatesDest = paths.webroot + 'templates';
paths.jsDest = paths.webroot + 'js';
paths.cssDest = paths.webroot + 'css';
paths.fontDest = paths.webroot + '/fonts';
paths.imagDest = paths.webroot + 'images';

/// Vendors

// JQuery
paths.jquery = paths.node_module + 'jquery/dist/jquery.js';

// Bootstrap
paths.bootstrapCSS = paths.node_module + 'bootstrap/dist/css/bootstrap.css';
paths.bootstrapJS = paths.node_module + 'bootstrap/dist/js/bootstrap.js';
paths.bootstrapFonts = paths.node_module + 'bootstrap/dist/fonts/**/*';


/// Project

// JS
paths.sw = paths.source + 'js/sw.js';
paths.app = paths.source + 'js/app.js';


// HTML
paths.mainHtml = paths.source  +'index.html';


// SCSS
paths.mainSCSS = paths.source  +'css/app.css';

// Static
paths.manifest = paths.source + 'manifest.json';
paths.favicon = paths.source + 'images/favicon.ico';
paths.images = paths.source + 'images/**/*';
paths.scss = paths.source + 'scss/**/*.scss';
paths.stations = paths.source + 'data/stations.json'


gulp.task('default',['copy:static', 'min:css', 'min:js']);


gulp.task('copy:static', function(){
	gulp.src([paths.bootstrapFonts])
	.pipe(gulp.dest(paths.fontDest));

});


gulp.task('min:js', function() {
	return gulp.src([paths.jquery,
		paths.bootstrapJS,
		paths.app ])
	.pipe(concat(paths.jsDest +'/app.min.js'))
	.pipe(gulp.dest('.'));
});

gulp.task('min:css', function () {
	var cssStream = gulp.src([paths.bootstrapCSS, paths.mainSCSS])
	.pipe(concat(paths.cssDest + '/app.min.css'))
	.pipe(gulp.dest('.'));
});

