# Functions

**ways to add types to a function in TS**

```js
    // let myFunction: Function;
    // let myFunction: (y: number, x: number) => number;
    // let myFunction: (y: string) => string;
    // let myFunction: () => string;
```

**Optional params and default params**

```js
    // the question mark in the fn parameter tells us that the parameter is optional
    // If the parameter has a default value, it is not necessary to indicate that it is optional with the ?
    const fullName = (
        firstName: string, 
        lastName?: string, 
        upper: boolean = false
    ): string => {

        if(upper){
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase()
        }else{
            return `${firstName} ${lastName || 'no lastName'}`
        }
    }

    const name = fullName('Tony', 'Stark')
    console.log({ name })
```

**Rest args**
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

```js
    // the parameter of type rest(...restParams) creates an array with the remaining values ​​of the parameters
    const fullName = (
        firstName: string, 
        ...restArgs: string[]
    ): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Joseph', 'Kent')
    console.log(superman)
```

**Function overloading in TS**

is a way to define multiple function signatures with the same name but different parameter types and return type. 

```js
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: unknown, b: unknown): unknown {
        return a + b;
    }

    // ✅  We do not need data validation to use the methods of this data type and we are going to have access to the methods of the data type
    console.log(add(10, 20)); // 30
    console.log(add("Hello ", "Steve")); // Hello Steve
```

- Overloading another example

```ts
    type Overloaded = {
        (param: string): number;
        (param: number): string;
    }

    const overloadedFn: Overloaded = (param: any) => {
        if(param instanceof Number) return String(param)
        if(param instanceof String) return Number(param)
        return param
    }

    const result = overloadedFn(1)// const result: string 
```

**Whithout overloading**

```js
    function add(a: number | string, b: number | string): number | string {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }
        throw new Error("Parameters must be numbers or strings");
    }

    // ✅  We need data validation to use the methods of this data type
    console.log(add(10, 20)); // 30
    console.log(add("Hello ", "Steve")); // Hello Steve
```

**Typescript Interface Functions**

* Function that does not take arguments and does not return a value:

```ts
interface MyClassProps {
    someProp: string;
    onChange(): any;
}
```

* Function that accepts an argument:

```ts
interface MyClassProps {
    anotherProp: number;
    onChange(name: string): any;
}
```

* Function that accepts an argument and returns a value:
    
```ts
interface MyClassProps {
    onChange(name: string): number;
}
```

* Function that is optional:

```ts
interface MyClassProps {
    onChange?(name: string): number;
    niceProp: boolean;
}
```

**Interface as Function Type**

TypeScript interface is also used to define a type of a function. This ensures the function signature.

```ts
interface KeyValueProcessor{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
```