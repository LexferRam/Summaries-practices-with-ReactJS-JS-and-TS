# Basics

**Data types**

Primitives ==> Sttring, Number, Boolean, Symbol
Compounds ==> Objectos literales, funciones, clases, arreglos

TypeScript is a superset of JavaScript which adds static typing.

**Setup Proyect with NodeJS and Express.js using TS**

* verificar que tenemos TS instalado globalmenete: tsc --version
* npm init -y
* git init
* Iniciar proyecto con TS: tsc --init
* Intalar los @types/ de los modulos que se usen en el proyecto de nodeJS
* tsc -w e indicar en la carpeta donde se guardará el transpilado en el tsconfig.json **"outDir": "./dist",**
* ejecutar el archivo transpilado: **node [archivo].js**
para no tener que hacer este paso manualmente debemos instalar como dependencia de dev el modulo ts-node y ahorarnos el paso de transpilar: **npm i ts-node -D**
ejecutar ==> **npx ts-node [ruta del archivo TS]**

**Imports types:**

```js
import * as HeroClasses from './classes/Hero'
import { Hero as SuperHero } from './classes/Hero'

// default imports
import powers, { Power } from './data/powers'
```

**Let, var, const / Hoisting**

- **Hoisting:** is process where variables and function declarations(var, function) are moved to the top of their scope before code execution.It does not occur with let and const.

As of EMS6 we have three forms of declaration: var, let y const.

- **var:** is the way variables have been declared in JavaScript since the beginning. It is function scoped and hoisted to the top of the function. It can be reassigned and redeclared. The scope of a variable declared with var is its execution context.

```js
    function explicacionDeVar(){
        var a = 10;
        console.log(a);  // a equivale 10 
        if(true){
            var a = 20;
            console.log(a); // a equivale 20
        } 
        console.log(a);  // a equivale 20
    }
```

- **let:** is the new way to declare variables in JavaScript. It is block scoped and hoisted to the top of the block. It can be reassigned but not redeclared. The scope of a variable declared with let is its block.

```js
    function explicacionDeLet(){
        let a = 10;
        console.log(a);     // a equivale 10 
        if(true){
            let a = 20;
            console.log(a); // a equivale 20
        } 
        console.log(a);     // a equivale 10
    }
```

- **const:** is the new way to declare constants in JavaScript. It is block scoped and hoisted to the top of the block. It cannot be reassigned or redeclared. The scope of a constant is its block.

```js
    function explicacionDeConst(){
        const a = 10;
        console.log(a);     // a equivale 10 
        if(true){
            const a = 20;
            console.log(a); // a equivale 20
        } 
        console.log(a);     // a equivale 10
    }
```

**Destructuring**

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
    const [a, b] = [1, 2, 3, 4, 5];
    console.log(a); // 1
    console.log(b); // 2

    const { name, age } = { name: 'John', age: 25 };
    console.log(name); // John
    console.log(age); // 25
```

**"this" in Arrow functions**

Unlike regular functions, arrow functions don’t have their own this binding. If we access this in the arrow function it will return the this of the closest non-arrow parent function.

```js
    const person = {
        name: 'John',
        age: 25,
        getName() => {
            return this.name
            // here this refers to window object, instead of person object
        }
    };
```

**Short circuits**
In JavaScript, short-circuiting is the evaluation of an expression from left to right with || and && operators and the evaluation stops when the outcome is determined.

**The logical OR ( || ) operator**
nos permite tener un valor por defecto si la primera expresión es falsy(null, NaN, 0, empty string, undefined)

```js
    const name = '' || 'John';
    console.log(name); // John
```

**Nulish coalescing operator ( ?? )**
Nos permite tener un valor por defecto si la primera expresión es null o undefined

```js
    const name = null ?? 'John';
    console.log(name); // John
```

**Strict mode**

The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode. Strict mode makes it easier to write "secure" JavaScript.

```js
    // "use strict" must be at the top of the file
    "use strict";
    x = 3.14;       // This will cause an error because x is not declared
``` 
