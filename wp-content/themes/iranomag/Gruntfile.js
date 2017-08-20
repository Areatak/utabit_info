module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files: {
          'assets/js/min/app.min.js': [
            'assets/js/src/app.js'
          ],
          'assets/js/min/customizer.min.js': [
            'assets/js/src/customizer.js'
          ],
          'assets/js/min/jquery-sticky-kit.min.js': [
            'assets/js/src/jquery-sticky-kit.js'
          ],
          'assets/js/min/voter-script.min.js': [
            'assets/js/src/voter-script.js'
          ],
          'assets/js/min/lazy-load.min.js': [
            'assets/js/src/lazy-load.js'
          ],
          'assets/js/min/coindesk-widget.min.js': [
            'assets/js/src/coindesk-widget.js'
          ],
        }
      }
    },
    concat: {
      options: {
          stripBanners: true
      },
      dist: {
          src: ['assets/js/min/bootstrap-rtl.min.js', 'assets/js/min/lightslider.min.js', 'assets/js/min/jquery-sticky-kit.min.js', 'assets/js/min/lazy-load.min.js', 'assets/js/min/lightbox.min.js', 'assets/js/min/app.min.js', 'assets/js/min/coindesk-widget.min.js'],
          dest: 'assets/js/bundle.min.js',
      },
    },
    cssmin: {
      dist: {
        files: {
          'assets/css/bundle.min.css': ['assets/css/src/*.css']
        }
      }
    },
    watch: {
      uglify: {
        files: [
            'assets/js/src/*'
        ],
        tasks: ['uglify']
      },
      concat: {
        files: [
            'assets/js/min/*'
        ],
        tasks: ['concat']
      },
      cssmin: {
        files: [
            'assets/css/src/*'
        ],
        tasks: ['cssmin']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [
        'uglify',
        'concat',
        'cssmin',
        'watch',
  ]);
};