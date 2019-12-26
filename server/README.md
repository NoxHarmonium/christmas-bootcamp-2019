# Server Component

## Running Locally

You'll need to set up a `.env` file with secrets that are not checked in. For example:

```
DB_PASSWORD=password1
DB_HOST=cluster0-abcde.mongodb.net
DB_NAME=bootcamp
```

The first time you check out the repo (or package.json has changed) you'll need to install dependencies:

```bash
$ yarn
```
  
To start the server run:

```bash
$ yarn watch
```
  
It should start on port 3001

It will automatically restart whenever the code changes.

## Running in Production

Build the code first:

```
$ yarn build
```
  
Start the server:

```
$ yarn serve
```
