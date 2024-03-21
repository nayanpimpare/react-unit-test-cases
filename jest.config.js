module.exports = {
  modulePaths: ["node_modules", "./src", "src"],
  coveragePathIgnorePatterns: ["/node_modules/", ".*.svg"],
  collectCoverageFrom: ["src/**/*.js"],
  collectCoverage: false, // remove once tests are built out
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },  
};
