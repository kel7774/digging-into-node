#!/usr/bin/env node
'use strict'

var args = require('minimist')(process.argv.slice(2), {
  boolean: ['help'],
  string: ['file']
})

if (args.help) {
  printHelp()
} else if (args.file) {
  console.log(args.file)
} else {
  error('Incorrect usage', true)
}

printHelp()

function error (message, includeHelp = false) {
  console.error(message)
  if (includeHelp) {
    console.log('')
    printHelp()
  }
}

function printHelp () {
  console.log('ex1 usage')
  console.log('ex1.js --file={FILENAME}')
  console.log('')
  console.log('--help                print this help')
  console.log('--file={FILENAME}     process the file')
  console.log('')
}
