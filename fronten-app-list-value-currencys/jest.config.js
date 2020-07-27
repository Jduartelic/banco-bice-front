module.exports = {
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
