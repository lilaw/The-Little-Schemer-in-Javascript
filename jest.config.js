module.exports = {
  testURL: "http://localhost/",  
  testEnvironment: 'node',
  //  setupFilesAfterEnv: [                                 // for anything that is not supported by default
  //   "<rootDir>/test/setup-test-framework.js"
  // ],
  moduleNameMapper: {
  },
  // testPathIgnorePatterns: ["/node_modules/", "/helpers/"],
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],      // paths for additional modules.
  collectCoverageFrom: [                                 // collection of files to coverage
    "**/src/**/*.js"
  ],
  coverageThreshold: {                                   // keep your coverage from falling
    global: {
      statement: 18,
      branches: 10,
      function: 19,
      lines: 18
    }
  }
  
};