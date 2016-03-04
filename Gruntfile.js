module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'public',
          open: true,
        }
      }
    },
    copy: {
      html5shiv: {
        src: 'node_modules/html5shiv/dist/html5shiv.min.js',
        dest: 'public/js/html5shiv.min.js',
      },
      picturefill: {
        src: 'node_modules/picturefill/dist/picturefill.min.js',
        dest: 'public/js/picturefill.min.js',
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'public/css/style.css': 'src/sass/theme.sass'
        }
      },
      prod: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          '.tmp/style.min.css': 'src/sass/theme.sass'
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'public/css/style.min.css': '.tmp/style.min.css'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'src/sass/**/*.sass'
        ],
        tasks: [
          'sass:dev'
        ],
        options: {
          nospawn: true
        }
      },
      html: {
        files: [
          'public/index.html'
        ],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.registerTask('default', [
    'copy',
    'sass:dev',
    'connect',
    'watch'
  ]);
  grunt.registerTask('build', [
    'copy',
    'sass:prod',
    'autoprefixer'
  ]);
};