<h1 align="center">
  <br>
  <a href="https://github.com/strt" target="_blank"><img src="http://www.strateg.se/images/18.a1e6bf01578783b6c19d43/1475494040088/strateg-logo.png" alt="" width="260"></a>
  <br>
  <br>
  <br>
</h1>

> The Strateg front-end boilerplate 

## Setup 🚀
### Prerequisites
- [Node](https://nodejs.org)
  - Preferably install with [nvm](https://github.com/creationix/nvm)
- [Gulp 4](https://github.com/gulpjs/gulp)
  - `$ npm install -g gulp-cli`

### Install
#### With CLI tool
Install
```
$ npm i -g strt-create-project
```

Usage 
```
$ strt-create-project <project-name>
```

#### Manual
Clone the repository
```
$ git clone --depth 1 git@github.com:strt/boilerplate.git <project-name> && cd <project-name> && rm -rf .git
```

Install packages
```
$ yarn install
```

## Features ✅
#### CSS/SASS
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- Customizable BEM grid
- Breakpoint mixin

#### JavaScript
- ES6 with [Babel](https://github.com/babel/babel)
- [Eslint](https://github.com/eslint/eslint) with the [Airbnb preset](https://github.com/airbnb/javascript)
- Detection of CSS breakpoints

#### Miscellaneous
- Live reloading with [Browsersync](https://github.com/Browsersync/browser-sync)
- Image compression
- SVG sprite generator

## Usage ✨
Our [coding standard](https://github.com/strt/strt-docs) is mandatory for all our projects.

### Configuration
See the avaiable options [here](https://github.com/strt/strt-gulptasks)

### Build
Development 
```
$ yarn dev
```

Production
```
$ yarn build
```
