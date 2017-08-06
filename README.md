# promise-create-script

[![Greenkeeper badge](https://badges.greenkeeper.io/kahwee/promise-create-script.svg)](https://greenkeeper.io/)

Creates script and returns a promise.

[![Build Status](https://travis-ci.org/kahwee/promise-create-script.svg?branch=master)](https://travis-ci.org/kahwee/promise-create-script)
[![npm version](https://badge.fury.io/js/promise-create-script.svg)](https://badge.fury.io/js/promise-create-script)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installing with npm

```sh
npm i --save promise-create-script
```

## Usage

```js
const createScript = require('promise-create-script')
const uri = 'http://code.jquery.com/jquery-3.2.1.slim.min.js'
createScript(document.body, uri).then(script => {
	// This returns the script tag
	console.log(script.src)
}).catch(err => {
	// Oops, some ting wong
	console.error(err)
})
```
