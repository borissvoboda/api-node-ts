# 0.1. Installation

pnpm init
pnpm install
pnpm tsc --init

pnpm install typescript --save-dev
pnpm install --save-dev @types/node @types/express

pnpm install express

# 0.2. Basic setup

## 0.2.1 tsconfig

tsconfig.json > "rootDir": "./src",
tsconfig.json > "outDir": "./dist",

## 0.2.2. package.json

"main": "server.js",

## 0.2.2.1 server.ts

Create a server ts as a main/starting ts file for the server.

## 0.2.3. test compiling to JS

Insert som simple code into server.ts

RUN> tsc
`/dist/server.js` should have been created.
