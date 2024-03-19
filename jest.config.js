module.exports = {
  modulePaths: ["node_modules", "./src", "src"],
  coveragePathIgnorePatterns: ["/node_modules/", ".*.svg", ".*.spec"],
  collectCoverageFrom: ["src/**/*.js"],
  collectCoverage: false, // remove once tests are built out
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
