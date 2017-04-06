<h1 align="center">
  <br>
  <a href="https://github.com/strt" target="_blank"><img src="http://www.strateg.se/images/18.a1e6bf01578783b6c19d43/1475494040088/strateg-logo.png" alt="" width="260"></a>
  <br>
  <br>
  <br>
</h1>

> Minimalistic frontend boilerplate 

## Install 🚀
### Requirements
Node (preferably install with [nvm](https://github.com/creationix/nvm) or get it [here](https://nodejs.org))

Gulp 
``` bash
$ npm install -g gulpjs/gulp-cli
```

### Install with CLI
CLI helper
``` bash
$ npm i -g strt-create-project
```

Usage 
``` bash
$ strt-create-project
```

### Manual install
Clone this repository
``` bash
$ git clone --depth 1 git@github.com:strt/strt-boilerplate.git {project-name} && cd {project-name} && rm -rf .git
```

Install packages
``` bash
$ yarn install
```

## Features ✅
### CSS/SASS
+ Autoprefixer
+ Reset CSS
+ BEM grid
+ Breakpoint mixin

### JavaScript
+ ES6 support with Babel
+ JavaScript modules
+ Small and useful helper functions
+ JavaScript detection of CSS breakpoints
+ Eslint (Airbnb preset)
+ Modernizr

### Miscellaneous
+ Live reloading with Browsersync
+ Image optimization with imagemin
+ SVG icon bundling
+ ScotchBox ready

## Usage ✨
### Coding standard
Find it [here](https://github.com/strt/strt-docs)

### Configuration
Find it [here](https://github.com/strt/strt-gulptasks)

### Build
Development 
``` bash
$ gulp
```

Production
``` bash
$ gulp production
```
