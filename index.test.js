const { add, subtract, multiply } = require('./index');

test('sumar dos numeros', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 2)).toBe(4);
    expect(add(2, 3)).toBe(5);
});

test('restar dos numeros', () => {
    expect(subtract(10, 2)).toBe(8);
    expect(subtract(2, 2)).toBe(0);
});

test('multiplicar dos numeros', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2, 3)).toBe(6);
});