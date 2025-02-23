module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
    // Transform TypeScript files using ts-jest
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  
    // Ignore certain node_modules packages from transformation
    transformIgnorePatterns: [
      '/node_modules/(?!(your-module|other-module)/)',
    ],
  
    // Handle CSS, images, etc. with mock files
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
      '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    },
  
    // Handle ESM/TSX file extensions
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
  
    globals: {
      'ts-jest': {
        useBabelrc: true, // Make sure Babel configuration is used
      },
      //Ensures react is loaded for Jest tests because of Next preserve setting
      "tsconfig": "./tsconfig.test.json"
    },
  };
  