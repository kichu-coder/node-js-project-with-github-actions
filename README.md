# Node.js REST API

A simple Node.js REST API with Express.

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start` to start the server

## Development

Run `npm run dev` to start the server with nodemon for hot reloading.

## API Endpoints

- GET `/api` - Basic API status
- GET `/api/users` - Get list of users
- POST `/api/users` - Create a new user

## intializing and pushing the changes to git repository

git init
git add .
git commit -m 'inital commit for creating a node js project with github actions'
git remote add origin https://github.com/yourusername/node-api.git
git push -u origin master

## add yaml file in .github/workflows for githubactions

## adding tests
npm install --save-dev jest supertest