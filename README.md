# Express API Server Boilerplate

A boilerplate for api server with express

## Features
- testing framework jest
- commit validate with commitizen and ghooks
- plenty script of options, like `format`, `lint`, `build` `dev`, `test:watch`, `validate` and many others will help developers
- mvc pattern to let you focus on writing codes

## Manual
- git clone `repo url` to download repo
- `cd repo && npm i` to initialize repo
- use scripts to enjoy your development
- scripts related to running app
  - `start`, start the server
  - `start:build`, start the server with build process
  - `dev`, start the server in live reload
  - `dev:build`, start the server in live reload with build process
  - `test`, run test onece
  - `test:watch`, run test and rerun test when code changes
  - `test:coverage`, run test and show the coverage report
  - `test:all`, run test and show the coverage report, rerun test and update the report when code changes
- other scripts:
  - `validate`, run automatically when submits a commit
  - `commit`, issue a commit with commitizen
  - `format`, check and correct the code styles with prettier
  - `lint`, check the code styles with eslint
