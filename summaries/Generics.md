# Generics

Generics are like variables – to be precise, type variables – that store the type (for example number, string, boolean) as a value. That allow us being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

```ts
    interface GenericIdentityFn {
        <Type>(arg: Type): Type;
    }
    
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    
    let myIdentity: GenericIdentityFn = identity;
```

- Another sintax (This makes the type parameter visible to all the other members of the interface.):

```js
    interface GenericIdentityFn<Type> {
        (arg: Type): Type;
    }
    
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    
    let myIdentity: GenericIdentityFn<number> = identity;
```

- Using Type Parameters in Generic Constraints

```js
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");

!!Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

Conclusion: 

<T> is a way of passing a specific type to the function, which will be the type that will take the argument of the fn and return type of the function
* Types which take parameters.

```ts
    const genericArrowFunction = <T>(argument: T): T => argument
```