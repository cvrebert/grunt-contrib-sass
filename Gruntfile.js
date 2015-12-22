'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      test: [
        'test/tmp',
        '.sass-cache'
      ]
    },
    sass: {
      options: {
        sourcemap: 'none'
      },
      compile: {
        files: {
          'test/tmp/scss.css': 'test/fixtures/compile.scss',
          'test/tmp/sass.css': 'test/fixtures/compile.sass',
          'test/tmp/css.css': 'test/fixtures/compile.css'
        }
      },
      ignorePartials: {
        cwd: 'test/fixtures/partials',
        src: '*.scss',
        dest: 'test/tmp',
        expand: true,
        ext: '.css'
      },
      updateTrue: {
        options: {
          update: true
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures',
          src: [
            'updatetrue.scss',
            'updatetrue.sass',
            'updatetrue.css'
          ],
          dest: 'test/tmp',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('nodeunit', function () {
    var done = this.async();
    var spawn = require('child_process').spawn;
    spawn('npm', ['run', 'unit'], {stdio: 'inherit'})
    .on('error', function (err) {
      grunt.fail.warn(err);
    })
    .on('exit', function (code, signal) {
      if (code === 0) {
        grunt.log.writeln('nodeunit passed.');
        done();
      }
      else if (code === null) {
        grunt.fail.warn('nodeunit killed with signal ' + signal);
      }
      else {
        grunt.fail.warn('nodeunit exited with code ' + code);
      }
    });
  });
  grunt.registerTask('mkdir', grunt.file.mkdir);
  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'sass',
    'nodeunit',
    'clean'
  ]);
  grunt.registerTask('default', ['test']);
};
