const add = (a, b ) => a + b

const generateGreeting = (name = 'Anon') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7)
});

test('Should say hello (name)!', () => {
  const greeting = generateGreeting('gracie')
  expect(greeting).toBe('Hello gracie!')
});

test('should generate greeting for no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anon!');
});
