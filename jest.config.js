module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
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
        '^.+\\.(js|jsx|ts)$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@hoc/(.*)$': '<rootDir>/src/hoc/$1',
        '^@providers/(.*)$': '<rootDir>/src/providers/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/mockData.js',
    },
};
