'use strict';

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        // project config
        pkg: pkg,

        // pages
        assemble: {
            options: {
                layoutdir: 'src/layouts',
                layout: 'default.hbs',
                partials: ['src/partials/*.hbs'],
                data: ['src/data/*.yaml'],
                flatten: true
            },
            pages: {
                src: ['src/pages/*.hbs'],
                dest: 'dest'
            }
        },

        // styles
        less: {
            dist: {
                files: {
                    'assets/css/all.css': 'assets/less/all.less'
                },
                options: {
                    compress: false
                }
            }
        },

        // file watcher
        watch: {
            options: {
                atBegin: true,
                livereload: false
            },
            pages: {
                files: ['src/**/*.hbs'],
                tasks: 'assemble:pages'
            },
            styles: {
                files: ['assets/less/**/*.less'],
                tasks: 'less'
            }
        },

        // internal server
        connect: {
            server: {
                options: {
                    livereload: false
                }
            }
        }
    });


    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('default', ['assemble', 'less']);

};