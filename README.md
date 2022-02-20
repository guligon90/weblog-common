# weblogapp-common

A TypeScript package, with common features used in the [weblogapp](https://github.com/guligon90/node-challenge) project.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Development](#development)
- [Scripts](#scripts)
  - [Build](#build)
  - [Clean](#clean)
  - [Publish](#publish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```shell
npm install @weblogapp/weblogapp-common
```

## Development

You must have already installed and configured in your workspace:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started)

For local development, you must install the local dependencies, running the command:

```shell
yarn install
```

## Scripts

The building, cleaning and publishing features of this package are implemented in the [`package.json`](./package.json), via the following scripts:

### Build

Generates the Javascript code via TypeScript compileer `tsc`:

```shell
yarn build
```

### Clean

Removes the build output:

```shell
yarn clean
```

### Publish

Publishes the package codebase to the to NPM Registry, given the appopriate credentials.

```shell
yarn pub
```

The result of the publishing script can be inspected in the respective [npmjs page](https://www.npmjs.com/package/@weblogapp/weblogapp-common).

Other scripts related to development quality assurance can also be checked via Yarn.
