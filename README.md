# strt-boilerplate
A basic boilerplate for your new projects

## Setup
1. Clone or copy this repo and rename it
2. Make sure [editorconfig](http://editorconfig.org/) is installed

## Gulp installation
1. Make sure [node.js](https://nodejs.org/en/) is installed
2. Make sure [bower](http://bower.io/) is installed
3. Open the projects root folder in a terminal window
4. Run `npm install` (depending on how node is installed sudo might be needed)
5. Run `gulp bower`
6. Installation done

## Gulp configuration
In the config.json file you have the available options ex. change dist path  

## Gulp usage
Run `gulp` in your terminal 

## Grid
The difference between this grid and any other grid is that this grid uses inline-block instead of floats. That is because we want to be able to vertical align column with as little effort as possible. Because inline-blocks have white space between them the parent of the columns must have font size set to 0.

##### A simple example
```html
<div class="grid -pad">
  <div class="grid__column -desktop-3 -tablet-6 -mobile-6"></div>
  <div class="grid__column -desktop-3 -tablet-6 -mobile-6"></div>
</div>
```
