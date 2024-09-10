# 1. SETUP

## 0.1. Installation

pnpm init
pnpm install
pnpm tsc --init

pnpm install typescript --save-dev
pnpm install --save-dev @types/node @types/express

pnpm install express

pnpm install dotenv

## 0.2. Basic setup

## 0.2.1 tsconfig

tsconfig.json > "rootDir": "./src",
tsconfig.json > "outDir": "./dist",

### 0.2.2. package.json

"main": "server.js",

#### 0.2.2.1 server.ts

Create a server ts as a main/starting ts file for the server.

### 0.2.3. test compiling to JS

Insert som simple code into server.ts

RUN> tsc
`/dist/server.js` should have been created.

# 1. Create server

## 1.0. Simple Express Server

- In server.ts we creata a simple express server.
- .env / .env.example for environmental variables

## 2.0. Compile and watch

- package.json > "dev": "node dist/server.js --watch"
  We watch the changes in compiled JS.
  The code will change (the tsc will compile) when we run `tsc`.
