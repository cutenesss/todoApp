const baseJestConfig = require('./jest.config')

module.exports = {
  ...baseJestConfig,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.tsx',
  ],
  coverageReporters: ['lcov'],
  coverageThreshold: {
    '**/*.{ts,tsx}': {
      statements: 100,
      branches: 100,
      lines: 100,
      functions: 100,
    },
  },
}
