module.exports = {
  modulePaths: ["node_modules", "./src", "src"],
  coveragePathIgnorePatterns: ["/node_modules/", ".*.svg"],
  collectCoverageFrom: ["src/**/*.js"],
  collectCoverage: false, // remove once tests are built out
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },  
};
