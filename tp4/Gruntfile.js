module.exports = function(grunt) {

  	// Project configuration.
  	grunt.initConfig({
  		concat: {
	     	js: {
	        	src: ['src/js/*.js'],
	        	dest: 'dist/js/app.js'
	    	},
        css: {
          src:['src/css/*.css'],
          dest:'dist/css/style.css'
        }
	    },
	    uglify: {
    		js: {
	      		files: {
	        		'dist/js/app.min.js': ['dist/js/app.js']
            //
	      		}
	    	}
      },
      cssmin: {
          css: {
            files:{
              'dist/css/style.min.css':['dist/css/style.css']
            }
          }
        },
	    copy: {
		  	js: {
			    files: [{
					// includes files within path
					src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'dist/js/jquery.min.js', filter: 'isFile' ,
          src: ['node_modules/vue/dist/vue.global.js'], dest: 'dist/js/vue.global.js', filter: 'isFile'
        }
			    ]
		  	}
		}
  	});

  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  	grunt.registerTask('mep', ['concat', 'uglify', 'copy', 'cssmin']);
  	grunt.registerTask('mep-js', ['concat:js', 'uglify:js', 'copy:js']);
    grunt.registerTask('mep-css', ['concat:css', 'cssmin']);
};
