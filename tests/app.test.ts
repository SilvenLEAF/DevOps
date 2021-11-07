import { add } from '../app';



describe('Add function Tests', () => {
  test('Adding 5 and 3 to be number 8', () => {
    expect(add(5, 3)).toBe(8)
  })

  // test('Adding 7 and 2 to be string "9"', () => {
  //   expect(add(7, 2)).toBe('9')
  // })
  
  test('Adding 3 and 2 to be 5', () => {
    expect(add(3, 2)).toBe(5)
  })
})


/*
---------------------------------------
   Let's learn how to write a test
---------------------------------------
  METHOD 1:

  test("Your Test Name", ()=>{
    expect(something).toBe(something)
  })

  [OR]

  METHOD 2:

  it("Your Test Name", ()=>{
    expect(something).toBe(something)
  })


---------------------------------------
.  Modularizing your tests collection
---------------------------------------

  describe('your test module name', () => {
    // inside here you'll write the tests for this module, you can use both test() or it(())
    test('if it does this thing', () => { expect(something).toBe(something) });
    test('if it does the other thing', () => { expect(something).toBe(something) });
  });

  [OR]

  describe('your test module name', () => {
    // inside here you'll write the tests for this module, you can use both test() or it(())
    it('if it does this thing', () => { expect(something).toBe(something) });
    it('if it does the other thing', () => { expect(something).toBe(something) });
  });

---------------------------------------
.      With love from SilvenLEAF
---------------------------------------
*/
