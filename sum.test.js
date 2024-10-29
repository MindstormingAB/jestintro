// Import sum
const { sum, sub } = require('./sum')

// Tests
describe('testing of math functions', () => {
  // Test 1 for sum
  it('adds positive numbers as expected', () => {
    expect(sum(1, 2)).toBe(3)
  })

  // Test 2 for sum
  it('adds negative numbers as expected', () => {
    expect(sum(-1, -2)).toBe(-3)
  })

  // Test 3 for sum
  it('adds both positive and negative numbers as expected', () => {
    expect(sum(-1, 2)).toBe(1)
  })

  // Test 1 for sub
  it('substracts positive numbers with positive difference as expected', () => {
    expect(sub(2, 1)).toBe(1)
  })

  // Test 2 for sub
  it('adds negative numbers as expected', () => {
    expect(sub(-1, -2)).toBe(1)
  })

  // Test 3 for sub
  it('adds both positive and negative numbers as expected', () => {
    expect(sub(-1, 2)).toBe(-3)
  })
})
