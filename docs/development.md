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

## 1.1. Compile and watch

- package.json > "dev": "node --watch-path=./src dist/server.js"
  We watch the changes in compiled JS.
  The code will change (the tsc will compile) when we run `tsc`.

# 2. Install Swagger UI Express

pnpm install swagger-ui-express
Auto-generated swagger-ui API docs
According to the documentation https://www.npmjs.com/package/swagger-ui-express

## 2.0. swagger ui types

install types for swagger-ui-express
pnpm i --save-dev @types/swagger-ui-express

## 2.1. JSON import

tsconfig.json > uncomment resolveJsonModule
"compilerOptions": //...
"resolveJsonModule": true,
Because of the json import.

## 2.2. Swagger UI

Navigete to http://localhost:4242/api-docs
