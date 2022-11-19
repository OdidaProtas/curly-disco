import * as fs from "node:fs";
import { IPackageJSON } from "../specs/packageJson";

export default (root: string, opts: IPackageJSON) => {
  const { name, description, githubUsername, author } = opts;
  return new Promise((resolve): void => {
    const tsconfigPath = `${root}/tsconfig.json`;
    fs.writeFileSync(
      tsconfigPath,
      content(name, description, githubUsername, author)
    );
    resolve("done")
  });
};

var content = (
  name: string,
  description: string,
  githubUsername: string,
  author: string
) => `
{
    "name": "${name}",
    "version": "1.0.0",
    "description": "${description}",
    "main": "dist/index.js",
    "bin": "bin/createSkyService.cjs",
    "repository": "https://github.com/${githubUsername}/${name}.git",
    "bugs": {
      "url": "https://github.com/${githubUsername}/${name}/issues"
    },
    "author": "${author}",
    "license": "ISC",
    "type": "module",
    "engines": {
      "node": ">=14.0.0"
    },
    "scripts": {
      "start": "tsc --build && pm2 start ecosystem.config.json --no-daemon",
      "compile": "tsc --build",
      "compile:watch": "tsc --build --watch",
      "pre:dev": "cross-env NODE_ENV=development nodemon --experimental-modules --es-module-specifier-resolution=node dist/index.js",
      "dev": "concurrently --kill-others \"yarn compile:watch\" \"yarn pre:dev\"",
      "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest -i --colors --verbose --detectOpenHandles",
      "test:ts": "cross-env NODE_OPTIONS=--experimental-vm-modules jest -i --colors --verbose --detectOpenHandles -- 'ts$'",
      "test:js": "cross-env NODE_OPTIONS=--experimental-vm-modules jest -i --colors --verbose --detectOpenHandles -- 'js$'",
      "test:watch": "cross-env NODE_OPTIONS=--experimental-vm-modules jest -i --watchAll",
      "coverage": "cross-env NODE_OPTIONS=--experimental-vm-modules jest -i --coverage",
      "coverage:coveralls": "cross-env NODE_OPTIONS=--experimental-vm-modules jest -i --coverage --coverageReporters=lcov",
      "lint": "eslint .",
      "lint:fix": "eslint . --fix",
      "prettier": "prettier --check **/*.js",
      "prettier:fix": "prettier --write **/*.js",
      "docker:prod": "docker-compose -f docker-compose.yml -f docker-compose.prod.yml up",
      "docker:dev": "docker-compose -f docker-compose.yml -f docker-compose.dev.yml up",
      "docker:test": "docker-compose -f docker-compose.yml -f docker-compose.test.yml up",
      "prepare": "husky install",
      "release": "standard-version && git push --follow-tags origin master",
      "commit": "git add -A && cz"
    },
    "devDependencies": {
      "@commitlint/cli": "^16.2.3",
      "@commitlint/config-conventional": "^16.2.1",
      "@faker-js/faker": "^6.2.0",
      "@jest/globals": "^27.5.1",
      "@ryansonshine/commitizen": "^4.2.8",
      "@ryansonshine/cz-conventional-changelog": "^3.3.4",
      "@types/bcryptjs": "^2.4.2",
      "@types/compression": "^1.7.2",
      "@types/cookie-parser": "^1.4.2",
      "@types/cors": "2.8.8",
      "@types/express": "^4.17.13",
      "@types/express-rate-limit": "^5.1.3",
      "@types/jest": "^27.4.1",
      "@types/morgan": "^1.9.3",
      "@types/node": "^16.11.12",
      "@types/nodemailer": "^6.4.4",
      "@types/passport-jwt": "^3.0.6",
      "@types/supertest": "^2.0.11",
      "@types/swagger-jsdoc": "^6.0.1",
      "@types/swagger-ui-express": "^4.1.3",
      "@types/validator": "^13.7.0",
      "@typescript-eslint/eslint-plugin": "^5.7.0",
      "@typescript-eslint/parser": "^5.7.0",
      "concurrently": "^7.1.0",
      "coveralls": "^3.1.1",
      "eslint": "^8.4.1",
      "eslint-config-airbnb-base": "^15.0.0",
      "eslint-config-airbnb-typescript": "^16.1.0",
      "eslint-config-prettier": "^8.3.0",
      "eslint-plugin-import": "^2.25.3",
      "eslint-plugin-jest": "^25.3.0",
      "eslint-plugin-prettier": "^4.0.0",
      "eslint-plugin-security": "^1.4.0",
      "husky": "^7.0.4",
      "jest": "^27.4.4",
      "lint-staged": "^12.1.2",
      "node-mocks-http": "^1.11.0",
      "nodemon": "^2.0.20",
      "prettier": "^2.5.1",
      "standard-version": "^9.3.2",
      "supertest": "^6.1.6",
      "ts-jest": "^27.1.3",
      "typescript": "^4.5.4"
    },
    "dependencies": {
      "bcryptjs": "^2.4.3",
      "compression": "^1.7.4",
      "cors": "^2.8.5",
      "cross-env": "^7.0.3",
      "dotenv": "^10.0.0",
      "express": "^4.17.1",
      "express-mongo-sanitize": "^2.1.0",
      "express-rate-limit": "^5.5.1",
      "helmet": "^4.6.0",
      "http-status": "^1.5.0",
      "joi": "^17.5.0",
      "jsonwebtoken": "^8.5.1",
      "moment": "^2.29.4",
      "mongoose": "^6.4.6",
      "morgan": "^1.10.0",
      "nodemailer": "^6.7.2",
      "passport": "^0.6.0",
      "passport-jwt": "^4.0.0",
      "pm2": "^5.1.2",
      "swagger-jsdoc": "^6.1.0",
      "swagger-ui-express": "^4.2.0",
      "validator": "^13.7.0",
      "winston": "^3.3.3",
      "xss-clean": "^0.1.1"
    },
    "config": {
      "commitizen": {
        "path": "./node_modules/@ryansonshine/cz-conventional-changelog"
      }
    }
  }
`;
