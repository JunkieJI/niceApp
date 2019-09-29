module.exports = {
  rootDir: '.',
  displayName: { name: 'enzyme-setup', color: 'blue' },
  runner: 'jest-runner',
  verbose: true,
  errorOnDeprecated: true,
  roots: ['./tests'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.js']
};
