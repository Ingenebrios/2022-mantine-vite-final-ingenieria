module.exports = {
  moduleNameMapper:{
    '\\.css$':'<rootDir>/__mocks__/styleMock.js',
    '\\.png$':'<rootDir>/__mocks__/styleMock.js',
    '\\.svg$':'<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["src/firebase"]
}
