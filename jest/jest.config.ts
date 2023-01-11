// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// module.exports = {
  // testEnvironment: "node",
  // preset: "ts-jest",
  // globals: {
  //   "ts-jest": {
  //     useESM: true,
  //   },
  // },
  // extensionsToTreatAsEsm: ['.ts'],
  // moduleNameMapper: {
  //   '^(\\.{1,2}/.*)\\.js$': '$1',
  // },
  // transform: {
  //   // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
  //   // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
  //   '^.+\\.tsx?$': [
  //     'ts-jest',
  //     {
  //       useESM: true,
  //     },
  //   ],
  // },
// };

import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "node",
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};

export default config;
