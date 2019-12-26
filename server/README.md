# Server Component

## Running Locally

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
