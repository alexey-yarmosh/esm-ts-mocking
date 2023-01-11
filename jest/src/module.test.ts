import {jest} from '@jest/globals';

const mockDepencency = jest.fn().mockImplementation(() => 2);

jest.unstable_mockModule('./dependencyA', () => ({
  default: mockDepencency,
}));

jest.unstable_mockModule('./dependencyB', () => ({
  dependency: mockDepencency,
}));

jest.unstable_mockModule('lodash', () => ({
  default: {
    first: () => 2
  }
}));

const module = (await import('./module'));

describe('test', () => {
  it('should mock src modules', () => {
    const result = module.default();
    expect(result).toEqual(4);
  });

  it('should mock npm modules', () => {
    const result = module.first();
    expect(result).toEqual(4);
  });

  it('should update mock on the run', async () => {
    mockDepencency.mockImplementation(() => 3);
    const result = module.default();
    expect(result).toEqual(5);
    mockDepencency.mockClear();
  })
});
