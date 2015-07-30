#!/usr/bin/env node

// MUST BE RUN WITH DATABASE_URL='pg://postgres:btcbot@localhost/coinbase_exchange';

var macd = require('./macd');

var program = require('commander');

program
  .version('0.0.1')
  .option('-a', '--algorithm', 'Run Algorithm')
  .parse(process.argv);

if (program.args[0] === 'macd') {
  console.log('Running MACD Algorithm');
  macd();
}

