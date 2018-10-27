# Crew frontend application

This is a React app for helping with hiring personnel.
Prospective person move through three stage:
* applied
* interviewing
* hired

Also available filters
* name
* city

Filter states are persistent between the browser tabs.

### Requirements
For development, you will need Node.js and npm or yarn installed on your environement.

### Install
`$ git clone https://github.com/vikastadnik/hiring-system.git`

`$ cd hiring-system`
`$ npm install` or `$ yarn install`

### Development
For developing application you should run the following task:

`$ npm run start` or `yarn run  start`

Then open your browser and visit http://localhost:8080. It will be automatically compiled and the browser will refresh automatically per changes.

### Creating a static develop build

To create a static instance of this project, run the following task:

`$ npm run build-app` or `yarn run build-app`

This will create a folder called dist, into which the required files will be created.

### Creating a production  build

To create a production instance of this project, run the following task:

`$ npm run build-target` or `yarn run build-target`

___

### Languages and tools
* React
* Typescript
* TSLint
* Babel
* Webpack
* Gulp