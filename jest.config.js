module.exports = {
  modulePaths: ["node_modules", "./src", "src"],
  coveragePathIgnorePatterns: ["/node_modules/", ".*.svg"],
  collectCoverageFrom: ["src/**/*.js"],
  collectCoverage: false, // remove once tests are built out
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },  
};
