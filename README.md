# node-cli-starter

Node.js CLI project template.

## Table of Contents

1. [Create a Hello World project](#step1-create-a-hello-world-project)
1. [Install command to `PATH`](#step1-install-command-to-path)

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
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/soulmachine/node-cli-starter.git"
  },
  "keywords": [
    "cli",
    "node",
    "starter"
  ],
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
    "start": "node ./src/main/index.js"
  }
}
```

Create a file `./src/main/index.js`:

```javascript
console.log('Hello World')
```

Now run this project by the command `npm start`, you'll see `Hello World` printed out.

## 2. Install command to `PATH`

We can install this CLI project as a command to `PATH` so that it can be used directly in terminal.

First add the following line at the beginning of `index.js`:

```text
#!/usr/bin/env node
```

Then add a `bin` field in `package.json`:

```json
"bin": {
  "hello-world": "./src/main/index.js"
}
```

Run `npm link` and type `hello-worlk` in terminal.

## Add a second command

Create a file `./src/main/command2.js`:

```javascript
#!/usr/bin/env node

console.log('Command 2');
```

Add an item in `bin` field:

```json
"bin": {
  "hello-world": "./src/main/index.js",
  "command2": "./src/main/command2.js"
}
```

Run `npm link` and type `command2` in terminal.

## `.editorconfig`

Use `.editorconfig` to unify the style of editor in your team.

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
```

## Must-have librarys

* [chalk](https://www.npmjs.com/package/chalk): colorizes text on terminal.
* [yargs](https://www.npmjs.com/package/yargs): parsing arguments and generating an elegant user interface.

Install:

```bash
npm install --save chalk yargs
npm install --save-dev @types/chalk @types/yargs
```
