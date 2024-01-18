#!/usr/bin/env node

const {Command} = require('commander');
const parsePath = require('parse-svg-path');
const program = new Command();

program
    .name('svgosu')
    .description('CLI to convert SVG paths to OSU objects');

program.command('path')
    .description('parse an svg path')
    .argument('<svgPath>', 'path attribute')
    .action((svgPath) => {
        const parsedPath = parsePath(svgPath);
        console.log(parsedPath); //"M43 110C100 69 167 167 226 116C318 183 372 75 350 43"

        const commands = parsedPath.map((elem) => elem.shift());

        console.log(commands);
        console.log(parsedPath);
    });

try {
    program.parse();
} catch (e) {
    console.log(`error: ${e.message}`);
}