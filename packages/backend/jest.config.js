export default {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.service.(t|j)s"],
  coveragePathIgnorePatterns: [
    "src/shared/.*\\.service\\.(t|j)s$",
    "src/module/.*/infrastructure/.*\\.service\\.(t|j)s$",
  ],
  testPathIgnorePatterns: [
    "src/shared/.*\\.service\\.(t|j)s$",
    "src/module/.*/infrastructure/.*\\.service\\.(t|j)s$",
  ],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
};
