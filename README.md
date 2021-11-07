Hey there my Js siblings! Excited to crash into TypeScript and fell madly in love? But ever wondered how to test your love? Well then fear not! Here we go again! Onto the beautiful world of Testing!!

Also stay tuned! Because on our very next blog, we'll learn some amazing DevOps stuff and integrating it with Github Actions as well!

Anyway, let's init the adventure!

***

### Step 0: Begin the Project
Create a folder and open it in your favorite editor (mine VS Code). Then type this command on your project terminal
```bash 
npm init -y
```
(It'll create a package.json file to track all the packages that you'd download and so on)

### Bonus Step: Adding TypeScript
For those who are a bit lost on how to set up the environment and run the TypeScript files, check this one out **[TypeScript SETUP by SilvenLEAF](https://dev.to/silvenleaf/typescript-setup-by-silvenleaf-1aen)**

Well anyway, in short (for details, checkout the above link)
- install typescript
```bash
npm i typescript 
```

- init our tsconfig
(make sure you already have typescript globally installed, if not type **npm i -g typescript**. And don't get it confused with the previous normal **npm i typescript** command)
```bash
tsc --init
```
(It'll create a **.tsconfig** file)

- install **ts-node** and **ts-node-dev**
```bash 
npm i ts-node ts-node-dev
```

Now let's create an **app.ts** file and send create a basic function that we'll be testing later!

Write this in the **app.ts** file
```typescript
export const add = (num1: number, num2: number)=> {
  return num1 + num2;
};
```

Now that out of the way, let's leap into the beautiful world of testing!

***

### Step 1: Setting up Jest
Install the following packages with the following command
```bash 
npm i -D jest ts-jest @types/jest
```
Jest is a testing library that we'll be using here.
 
 (**npm i -D X** is the short-hand for **npm install --save-dev X**)

 Now type the following command
 ```bash
 npx ts-jest config:init
 ```
 It'll create a **jest.config.js** file at the same level as **package.json** with the following content inside it
 ```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
 ```

 Now inside **package.json**, write a script named **test** and give it's value **jest**. It'll look something like this.

```bash
{
  ...other package.json stuff
  "scripts": {
    "test": "jest"
  },
  ...other package.json stuff
}
```

 Now let's write some tests!

 ***

 ### Step 2: Write some tests
 Create a folder named **tests** at the same level as **package.json**. And write all your test files inside it. As you might have guessed, the name of your test files might be something like this **{file_name}.test.ts**

 Now let's create a test file, named **app.test.ts** to test our **app.ts** file.

 Write this inside **app.test.ts** file
```typescript
import { add } from '../app';



describe('Add function Tests', () => {
  test('Adding 5 and 3 to be number 8', () => {
    expect(add(5, 3)).toBe(8)
  })

  test('Adding 7 and 2 to be string "9"', () => {
    expect(add(7, 2)).toBe('9')
  })
  
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
```

***

### Step 3: Let's test our tests
Yep, sounds weirdly amazing! So let's do this! Type any of the 3 commands to run our tests.

1. **npm run test**
2. **npm test**
3. **npm t**

All of  these do the same thing. One is the short-hand of other and vise versa!

Anyway, let's run it. You might see something like this:
![Test (Pass and Fail)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f4uf6y7czt7al4ap9tfz.png)

Congrats!! We just tested our beloved love TypeScript!! So sweet!

***

Stay tuned for more! Because we are gonna dive onto the DevOps world on our following blogs! We'll learn CI, CD, Github Actions, Automations and many many MORE!!



**NEXT blog coming soon by Nov 10th!!**

# What's NEXT?
#### 1. How to deploy in the Cloud (Azure VMs)
#### 2. Learning DevOps with Github Actions
#### 3. Improved AI BOT that can do anything
#### 4. Insane stuff with JavaScript/TypeScript
#### 5. Debugging TypeScript with VS Code Debugger
#### 6. Sequelize Hooks
#### 7. How to create an Android APP with NO XP
(including apk generating)


# Got any doubt? 
Drop a comment or Feel free to reach out to me @SilveLEAF on Twitter or [Linkedin](https://www.linkedin.com/in/silvenleaf/)

Wanna know more about me? Come here! 
[SilvenLEAF.github.io](https://SilvenLEAF.github.io)