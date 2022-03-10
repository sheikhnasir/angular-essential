import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new  Stock('Test','TSC',85,1000)).toBeTruthy();
  });
});
