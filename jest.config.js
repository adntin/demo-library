module.exports = {
  verbose: true,
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "transform": {
    "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testRegex": "/src/.*\\.test\\.ts$"
};