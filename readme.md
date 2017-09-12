<h1 align="center">
  <br>
  <a href="https://github.com/strt" target="_blank"><img src="http://www.strateg.se/images/18.a1e6bf01578783b6c19d43/1475494040088/strateg-logo.png" alt="" width="260"></a>
  <br>
  <br>
  <br>
</h1>

> Lightweight and customizable front end boilerplate

## Features ✅
- [Babel](https://github.com/babel/babel)
- [Eslint](https://github.com/eslint/eslint) with the [airbnb preset](https://github.com/airbnb/javascript)
- [Browsersync](https://github.com/Browsersync/browser-sync)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- SVG sprite generation

## Setup 🛠
### Requirements
- Node `>= 8` (install with [nvm](https://github.com/creationix/nvm) or get it [here](https://nodejs.org))

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
$ yarn
# or
$ npm install
```

## Usage 🚀
Our [coding standard](https://github.com/strt/strt-docs) is mandatory for all our projects.

### Configuration
See the avaiable options [here](https://github.com/strt/bricks)

### Build
Development (**Note** this won't minify assets or extract sourcemaps)
```
$ yarn dev
```

Production
```
$ yarn build
```
