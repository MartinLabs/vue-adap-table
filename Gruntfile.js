module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: grunt.file.readJSON('browserify.json')
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

};