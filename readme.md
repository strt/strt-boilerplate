# `strt-boilerplate`

> Lightweight front-end boilerplate

## Features ✅

- [Babel](https://github.com/babel/babel)
- [Eslint](https://github.com/eslint/eslint) with the [airbnb preset](https://github.com/airbnb/javascript)
- [Browsersync](https://github.com/Browsersync/browser-sync)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- SVG sprite generation

## Setup 🛠

### Requirements

- [Node.js](https://nodejs.org) `>= 8` (install with [NVM](https://github.com/creationix/nvm))

### Install

Clone the repository

```bash
$ git clone --depth 1 git@github.com:strt/boilerplate.git <project-name> && cd <project-name> && rm -rf .git
```

Install dependencies

```bash
$ yarn
# or
$ npm install
```

or check out [create-project](https://github.com/strt/create-project) for a simplified installation

## Usage 🚀

Please read through our [code of conduct](https://github.com/strt/code-of-conduct) before you begin

### Configuration

Check out [bricks](https://github.com/strt/bricks) for available configuration

### Build

Development (**Note** this won't minify assets or extract sourcemaps)

```bash
$ yarn dev
```

Production

```bash
$ yarn build
```
