module.exports = {
  verbose: true,
  setupFiles: [
    "<rootDir>/src/common/enzyme/setupEnzyme.js"
  ],
  transform: {
    "\\.tsx?$": "ts-jest"
  },
  testRegex: "/__tests__/.*(\\.|/)test\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx"
  ]
}
