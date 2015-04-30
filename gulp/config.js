var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {
    server: {
        settings: {
            root: dest,
            host: 'localhost',
            port: 8012,
            livereload: {
                port: 35929
            }
        }
    },
    sass: {
        src: src + '/styles/**/*.{sass,scss,css}',
        dest: dest + '/styles',
        settings: {
            indentedSyntax: false, // Enable .sass syntax?
            imagePath: '/images' // Used by the image-url helper
        }
    },

    script: {
        src: '/node_modules/jquery/dist/jquery.min.js',
        dest: dest + '/js',
        outputName: 'jquery.js'
    },

    browserify: {
        settings: {
            transform: ['reactify', 'babelify']
        },
        src: src + '/js/index.jsx',
        dest: dest + '/js',
        outputName: 'index.js',
        debug: gutil.env.type === 'dev'
    },
    html: {
        src: 'src/index.html',
        dest: dest
    },
    watch: {
        src: 'src/**/*.*',
        tasks: ['build']
    }
};
