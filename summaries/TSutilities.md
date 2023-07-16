# Utilities

TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types, this facilitate common type transformations.

**Omit**

With omit we can omit the properties, fields or keys that we want.
**Omit: Omit<T, K>**
With this we generate a new type that has all the properties of T except those specified in K

```ts

    interface UserTest {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
    }

    type UserWithoutContact = Omit<UserTest, 'email' | 'phoneNumber'>;

    // `UserWithoutContact` es ahora un tipo con las propiedades `id` y `name`, pero sin `email` ni `phoneNumber`.

    let user: UserWithoutContact = {
        id: 1,
        name: 'Carlos Araujo',
    };
```

**Pick**

It is the opposite of Omit, here I choose the fields that I want to be in my type or interface.
**Pick: Pick<T, K>**
With this we produce a new type that only has the properties of T that are specified in K


**Partial**

Using `Partial` to make all properties optional.

```ts
interface User3 {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
}
  
  // Usando `Partial` para hacer todas las propiedades de User opcionales
  type PartialUser = Partial<User3>;
```

**Required**

This generates a new type that has all the properties of T, but each attribute is required.

```ts
interface User2 {
    id: number;
    name: string;
    email?: string;
    phoneNumber?: string;
}
  
  // Usando `Required` para hacer todas las propiedades de User obligatorias
  type RequiredUser = Required<User2>;
```

**Readonly**

Readonly<T> is a utility type that allows you to create a new type based on an existing one, but making all properties of that type read-only.

```ts
    interface InterfaceName extends Readonly<Product> {
        statements
    }

    //con type
    type TypeName = Readonly<Product>;
```

**readonly**

the "readonly" property prevents a modification to the property

```ts
interface Product {
    readonly id: string | number;
    title: string;
    readonly description: string;
}

const product1: Product = {
    id: 1234,
    title: 'Product1',
    description: 'Product1 description'
}
```

**ReadonlyArray**

This data type is an array, but the main difference with "normal" arrays is that there are none of the mutation methods, such as pop, push, shift, etc. prevent array mutation.
    
```ts
    const array: ReadonlyArray<string> = ['a', 'b', 'c'];
    array.push('d'); // Error: Property 'push' does not exist on type 'readonly string[]'.
```

**Indexed Access Types**

We do it in much the same way that we access values ​​in arrays within JS, but in this case, instead of doing it in an array, we apply it to an interface.

```ts
    interface Human {
        name: string;
        age: number;
        isAlien: boolean;
    }
    
    function createHuman(name: Human["name"]) {
        // code
    }
```


**The keyof type operator**

The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as type P = "x" | "y":

```ts
type Point = { x: number; y: number };
type P = keyof Point;
```

If the type has a string or number index signature, keyof will return those types instead

**typeof type operator**

TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property

```ts
    let s = "hello";
    let n: typeof s;//let n: string
```
