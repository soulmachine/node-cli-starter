#!/usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');
const figlet = require('figlet');

const { argv } = yargs.options({
  a: { type: 'boolean', default: false },
  b: { type: 'string', demandOption: true },
  c: { type: 'number', alias: 'chill' },
  d: { type: 'array' },
  e: { type: 'count' },
  f: { choices: ['1', '2', '3'] },
});

console.log(chalk.green(figlet.textSync('node-cli-starter')));

console.info(argv);

console.info(chalk.green('Green text'));

console.log('Hello World');
