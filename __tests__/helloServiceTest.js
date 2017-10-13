import { helloService } from '../services/helloService';

test('Greets someone', () => {
  const expected = `Hello World! Your function executed successfully`;
  const actual = helloService({name: 'World'});
  expect(actual).toBe(expected);
});
