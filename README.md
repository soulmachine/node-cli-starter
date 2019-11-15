# node-cli-starter

Node.js CLI project template.

## Table of Contents

1. [Create a Hello World project](#1-create-a-hello-world-project)
1. [Add the command to `PATH`](#2-add-the-command-to-path)
1. [.editorconfig](#3-editorconfig)
1. [ESLint](#4-eslint)
1. [Prettier](#5-prettier)
1. [Must-have libraries](#6-must-have-libraries)
1. [Publish to npm](#7-publish-to-npm)
1. [Static type checking on JS files](#8-static-type-checking-on-js-files)

## 1. Create a Hello World project

Create an empty npm project,

```bash
npm init
```

Fill in some information then we get a `package.json` file:

```json
{
  "name": "node-cli-starter",
  "version": "1.0.0",
  "description": "Node.js CLI project template",
  "main": "src/index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/soulmachine/node-cli-starter.git"
  },
  "keywords": ["cli", "node", "starter"],
  "author": "soulmachine",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/soulmachine/node-cli-starter/issues"
  },
  "homepage": "https://github.com/soulmachine/node-cli-starter"
}
```

And add a `script` field to `package.json`:

```json
{
  "scripts": {
    "start": "node ./src/index.js"
  }
}
```

Create a file `./src/index.js`:

```javascript
console.log('Hello World');
```

Now run this project by the command `npm start`, you'll see `Hello World` printed out.

## 2. Install command to `PATH`

We can install this CLI project as a command to `PATH` so that it can be used directly in terminal.

First add the following line at the beginning of `index.js`:

```text
#!/usr/bin/env node
```

Then add 2 properties in `package.json`:

```json
"bin": "src/index.js",
"preferGlobal": "true",
```

`bin` tells npm where your executable file is so that it can install it into the `PATH`. And `preferGlobal`, if set to `true`, will warn users if they try to install the package locally. `preferGlobal` is not necessary, but it can be nice to let users know that the package is a CLI tool and meant to be installed globally.


Run `npm link` and type `node-cli-starter` in terminal.

## 3. `.editorconfig`

EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

Add a new file `.editoconfig` at the root directory of this project:

```ini
# https://EditorConfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

# Markdown Files
[*.md]
trim_trailing_whitespace = false

# Batch Files
[*.{cmd,bat}]
end_of_line = crlf
```

There are two special rules:

- Do NOT trim trailing whtespaces for Markdown files.
- Windows batch files(`.cmd` and `.bat`) require `CRLF` line endings.

Add a `.gitattributes` file to the root of your repository to force everything to be `LF`, except for Windows batch files that require `CRLF`:

```text
* text=auto eol=lf
*.{cmd,[cC][mM][dD]} text eol=crlf
*.{bat,[bB][aA][tT]} text eol=crlf
```

## 4. ESLint

Install:

```bash
npm install eslint babel-eslint eslint-config-airbnb-base --save-dev
```

Install plugins:

```bash
npm install eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-markdown --save-dev
```

Configure ESLint in file`.eslintrc.js`.

Add a command inside `scripts` field:

```json
"scripts" {
  "lint": "eslint . --ext '.js,.jsx,.ts,.tsx,.md'",
}
```

Add a file `.eslintignore` to ignore several files and directories.

## 5. Prettier

Install:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

Add the following config to `.eslintrc.js` to intergrate with ESLint:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

Then set Prettier's own options inside a `.prettierrc` file.

Add a command in `scripts`:

```json
"prettier": "prettier -c --write '**/*'",
```

Make VS Code formats code automatically on save:

```json
"files.autoSave": "onFocusChange",
"eslint.autoFixOnSave": true,
"editor.formatOnSave": true,
```

Add a file `.prettierignore` to ignore several file types.

For more details see <https://prettier.io/docs/en/integrating-with-linters.html>.

## 6. Must-have libraries

### 6.1 Parse command line arguments

Install `yargs`:

```bash
npm install yargs --save
npm install @types/yargs --save-dev
```

Added the following code to `./src/index.js`:

```typescript
const yargs = require('yargs');

const { argv } = yargs.options({
  a: { type: 'boolean', default: false },
  b: { type: 'string', demandOption: true },
  c: { type: 'number', alias: 'chill' },
  d: { type: 'array' },
  e: { type: 'count' },
  f: { choices: ['1', '2', '3'] },
});

console.info(argv);
```

### 6.2 Colorize text on terminal

Install`chalk` :

```bash
npm install chalk --save
```

Add the following code to `./src/index.js`:

```typescript
const chalk = require('chalk');

console.info(chalk.green('Green text'));
```

### 6.3 ASCII banner

Install `figlet`:

```bash
npm install figlet --save
npm install @types/figlet --save-dev
```

Add the following code to `./src/index.js`:

```typescript
const figlet = require('figlet');

console.log(chalk.green(figlet.textSync('node-cli-starter')));
```

## 7. Publish to npm

First, use a `.npmignore` file to keep stuff out of your package. See [Keeping files out of your package](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package) to learn more about `.npmignore`.

Second, run `npm login` to login.

Last, run `npm publish` to publish your package to npm.

## 8. Static type checking on JS files

After TypeScript 2.3, you can have static type checking on JavaScript code without rewriting them in TypeScript.

Install TypeScript compiler and other types definitions:

```bash
npm install typescript @types/node --save-dev
```

In `tsconfig.json` set `allowJs` and `checkJs` to `true` to enable type checking on JavaScript code.

Add a command `check-type` to `scripts`:

```json
"check-type": "tsc -p tsconfig.json",
```

One addtional benefit is that, vscode can provide rich Intellisense for your code!

## References

- [Developing your first CLI (command line interface) tool using NodeJS](https://dev.to/lucifer1004/developing-your-first-cli-command-line-interface-tool-using-nodejs-4649)
- [Resolving Git line ending issues in containers (resulting in many modified files)](https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files)
- <https://eslint.org/docs/user-guide/configuring>
- <https://prettier.io/docs/en/integrating-with-linters.html>
- <https://prettier.io/docs/en/configuration.html>
- <https://prettier.io/docs/en/options.html>
- [ant-design](https://github.com/ant-design/ant-design)
- [Type Checking JavaScript Files - TypeScript](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
