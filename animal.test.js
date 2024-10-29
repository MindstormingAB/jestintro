const Animal = require('./animal')

// Tests
describe('testing of animal functions', () => {
  let myAnimal

  beforeAll(() => {
    myAnimal = new Animal('Bella', 8, 'hund')
  })

  beforeEach(() => {
    myAnimal.name = 'Bella'
    myAnimal.age = 8
    myAnimal.species = 'hund'
  })

  // Test 1 for creating an animal
  it('creates an animal as expected', () => {
    expect(myAnimal.name).toBe('Bella')
    expect(myAnimal.age).toBe(8)
    expect(myAnimal.species).toBe('hund')
  })

  // Test 2 for aging
  it('increases age as expected', () => {
    expect(myAnimal.age).toBe(8)
    myAnimal.aging()
    expect(myAnimal.age).toBe(9)
  })

  // Test 3 for toConsole
  it('prints the animal as expected', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    myAnimal.toConsole()
    expect(consoleSpy).toHaveBeenCalledWith('Denna hund heter Bella och är 8 år gammal.')
    consoleSpy.mockRestore()
  })

  it('displays the animal as expected', () => {
    expect(myAnimal.toString()).toBe('Denna hund heter Bella och är 8 år gammal.')
  })

  it('Renaming done correct', () => {
    myAnimal.rename('Bello')
    expect(myAnimal.name).toBe('Bello')
    myAnimal.rename('Popoulos')
    expect(myAnimal.name).toBe('Popoulos')
  })

  it('is not a correct name', () => {
    // Spara felmeddelande i variabel
    const response = myAnimal.rename('Andxxxers')
    expect(response).toMatch('Felaktigt namn')
  })
})
