import assert from 'node:assert';
import esmock from 'esmock';

const mockFunction = () => 2;
const module = await esmock('./module.ts', {
  './dependencyA.ts': {
    default: mockFunction
  },
  './dependencyB.ts': {
    dependency: mockFunction
  },
  'lodash': {
    first: mockFunction
  }
});

describe('test', async () => {

  it('should mock src modules', () => {
    const result = module();
    assert.equal(result, 4);
  });

  it('should mock npm modules', () => {
    const result = module.first();
    assert.equal(result, 4);
  });

  it('should update mock on the run', async () => {
    const module2 = await esmock('./module.ts', {
      './dependencyA.ts': {
        default: () => 3
      },
      './dependencyB.ts': {
        dependency: () => 3
      }
    });
    const result = module2.default();
    assert.equal(result, 6);
  })
});
