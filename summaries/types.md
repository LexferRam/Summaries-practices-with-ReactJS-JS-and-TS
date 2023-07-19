# TS types

**Diference any y unknown en TS**

- any is the most generic data type that exists in TS, that is, any data type can be assigned to a variable of type any
- unknown is a safer data type than any, since, in order to use it, we must validate the data type assigned to the unknown type variable.
This type of data is the improvement of any, since it gives us the flexibility that sometimes we want without turning off static code analysis completely. Unknown forces us to do a type check.

```js
var examplaUseUnkonwType: unknown = 'Nico';

// ✅ Validación de tipo de dato
if (typeof examplaUseUnkonwType === 'string') { 
    examplaUseUnkonwType.toUpperCase()
}
```

**Never**
never means that the return does not have a reachable point. The never data type, above all, serves to type a function that will never end or simply that can end the program in the event of throwing an exception. exmple:

```js
const handleError = (code: number, message: string): never => {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`)
}
```

**Array**

```js
const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]
```

**Boolean**

```js
let isSuperman: boolean = true
```

**null y undefined**
Diferencia entre null y undefined (son tipos de datos)

- null is when we intentionally assign a variable to be null which means no value
- undefined is when we have not assigned a value to a variable or it does not exist
(applies to properties of an object or a variable)

```js
    // strictNullCheck = false, la sig es valida
    let isNumber: boolean = undefined;

    // strictNullCheck = true, la sig es invalida
    let isNumber: boolean = undefined;
```

**number**
    
```js
    let avengers: number = 5
```

**String**

```js
    let nickname: string = 'Ironman'
```

**Tuple**
A tuple is a typed array with a pre-defined length and types for each index.

```js
    let hero: [string, number] = ['Dr. Strange', 100]
```

**void** 
void is used to indicate that a function does not return anything

```js
    const callBatman = (): void => {
        console.log('Show bat signal')
    }
```

**enum**
Enums allow us to define a set of named constants, you can assign unique number values for each enum value.

```js
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    }
      // logs 404
      console.log(StatusCodes.NotFound);

      enum ROLES {
        ADMIN="admin",
        SELLER="seller",
        CUSTOMER="customer"
    }

    type User = {
        username: string;
        role: ROLES
    }

    const lexUser: User = {
        username: 'LEXFER',
        role: ROLES.ADMIN // de esta forma evitamos que no equivoquemos agregandoel valor del ROLE
    }
```

**Type, union type**

```ts
    type Hero = {
        name: string,
        age?: number,  // ? indica que es opcional
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Lexfer'
```

**Type Aliases:**

Type Aliases allow defining types with a custom name (an Alias). This is similar to interfaces but with some subtle differences.


**Other Types:**

The type alias can be used for additional types like primitives, unions, and tuples, unlike an interface.

```js
// primitive
type Name = string;

// object
type PersonName = { name: string; };
type PersonAge = { y: number; };

// union
type PartialPoint = PersonName | PersonAge;

// tuple
type Data = [number, string];
```

**Understanding union and Intersection types**

- **Union type A | B** is assignable to either A or B. It must have properties from A or B (or both)

- **Intersection type A & B** is assignable to both A and B. It must have properties from A and B

```ts
interface A {
    a: number;
}

interface B{
    b: boolean;
}

type UnionCombinedType = A | B;
type IntersectionType = A & B;
```

**Casting**
Casting is also referred to as type conversion it is a process of transforming one data type into another data type in typescript. Type casting is necessary when we need to override a type, such as when incorrect types are provided by a library..

```ts
    // Angle Bracket Syntax
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;

    // as syntax
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
```