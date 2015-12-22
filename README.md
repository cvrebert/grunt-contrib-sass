# grunt-contrib-sass v0.9.2 [![Build Status: Linux](https://travis-ci.org/gruntjs/grunt-contrib-sass.svg?branch=master)](https://travis-ci.org/gruntjs/grunt-contrib-sass)

> Compile Sass to CSS



## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-sass --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-sass');
```




## Sass task
_Run this task with the `grunt sass` command._

[Sass](http://sass-lang.com) is a preprocessor that adds nested rules, variables, mixins and functions, selector inheritance, and more to CSS. Sass files compile into well-formatted, standard CSS to use in your site or application.

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/download.html) installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem install sass` to install Sass.

Note: Files that begin with "_" are ignored even if they match the globbing pattern. This is done to match the expected [Sass partial behaviour](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials).

### Options


#### sourcemap

Type: `String`  
Default: `auto`

Values:

- `auto` - relative paths where possible, file URIs elsewhere
- `file` - always absolute file URIs
- `inline` - include the source text in the sourcemap
- `none`- no sourcemaps

**Requires Sass 3.4.0, which can be installed with `gem install sass`**


#### trace

Type: `Boolean`  
Default: `false`

Show a full traceback on error.


#### unixNewlines

Type: `Boolean`  
Default: `false` on Windows, otherwise `true`

Force Unix newlines in written files.


#### check

Type: `Boolean`  
Default: `false`

Just check the Sass syntax, does not evaluate and write the output.


#### style

Type: `String`  
Default: `nested`

Output style. Can be `nested`, `compact`, `compressed`, `expanded`.


#### precision

Type: `Number`  
Default: `5`

How many digits of precision to use when outputting decimal numbers.


#### quiet

Type: `Boolean`  
Default: `false`

Silence warnings and status messages during compilation.


#### compass

Type: `Boolean`  
Default: `false`

Make Compass imports available and load project configuration (`config.rb` located close to the `Gruntfile.js`).


#### debugInfo

Type: `Boolean`  
Default: `false`

Emit extra information in the generated CSS that can be used by the FireSass Firebug plugin.


#### lineNumbers

Type: `Boolean`  
Default: `false`

Emit comments in the generated CSS indicating the corresponding source line.


#### loadPath

Type: `String|Array`

Add a (or multiple) Sass import path.


#### require

Type: `String|Array`

Require a (or multiple) Ruby library before running Sass.


#### cacheLocation

Type: `String`  
Default: `.sass-cache`

The path to put cached Sass files.


#### noCache

Type: `Boolean`  
Default: `false`

Don't cache to sassc files.


#### bundleExec

Type: `Boolean`  
Default: `false`

Run `sass` with [bundle exec](http://gembundler.com/man/bundle-exec.1.html): `bundle exec sass`.


#### update

Type: `Boolean`  
Default: `false`

Only compile changed files.

### Examples

#### Example config

```js
grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'main.css': 'main.scss',       // 'destination': 'source'
        'widgets.css': 'widgets.scss'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);
```

#### Compile

```js
grunt.initConfig({
  sass: {
    dist: {
      files: {
        'main.css': 'main.scss'
      }
    }
  }
});
```

#### Concat and compile

Instead of concatenating the files, just `@import` them into another `.sass` file eg. `main.scss`.


#### Compile multiple files

You can specify multiple `destination: source` items in `files`.

```js
grunt.initConfig({
  sass: {
    dist: {
      files: {
        'main.css': 'main.scss',
        'widgets.css': 'widgets.scss'
      }
    }
  }
});
```

#### Compile files in a directory

Instead of naming all files you want to compile, you can use the `expand` property allowing you to specify a directory. More information available in the [grunt docs](http://gruntjs.com/configuring-tasks) - `Building the files object dynamically`.

```js
grunt.initConfig({
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: '../public',
        ext: '.css'
      }]
    }
  }
});
```
