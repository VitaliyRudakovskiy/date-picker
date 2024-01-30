module.exports = {
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/components/**/*.{ts,tsx}',
        'src/decorators/**/*.{ts,tsx}',
        '!src/**/*.stories.{ts,tsx}',
        '!src/**/index.ts',
        '!src/**/types.ts',
    ],
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },
};
