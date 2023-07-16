# Interfaces

Interfaces are capable of describing the wide range of shapes that JavaScript objects can take.In addition to describing an object with properties, interfaces are also capable of describing function types.
* describe the structure of the object, which means that it describes how the object should look like
* Interfaces specify the syntax that each entity must follow.

**Basic:**

```ts
    interface Hero {
        name: string,
        age?: number,  //* ? indica que es opcional
        powers: string[],
        getName?: () => string
    }

    /*
    
    * la interfaz se puede extender los types no
    
    */

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers : ['velocidad', 'Viajar en el tiempo'],
        getName(){
            return this.name
        }
    }
```

**Classes:**

```ts
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number=0;
        public name: string='';
        public realName: string='';

        mutantPower(id: number) {
            return this.name + ' ' + this.realName
        }
    }
```

**Complex:**

```ts
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress?(id: string): void
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Lexfer',
        age: 28,
        address: {
            id: 123,
            zip: 'DFR 12',
            city: 'Otawa',
        },
        getFullAddress(id: string){
            return this.address.city
        }
    }
```

**Functions:**

```ts
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addTwoNumbersFunction: addTwoNumbers = (a: number, b: number) => {
        return 10;
    }
```

**Generate a Interface using response JSON with Paste JSON as code**

* copy JSON into the clipboard
* ctrl + shift + p
* type "paste JSON as code"
* select "TypeScript interface"
* put the name of the top interface and it will generate the interface of the response

### **Diference between clase e interfaz**

The most notable difference between one and the other is that the classes have a constructor and the interfaces do not.

This is an advantage for classes over interfaces as it allows you to create static methods and properties.

You can create a very complex representation of an object using a class.

Now if in case you simply need to check types of an object, you will certainly use an interface, it doesn't transpile to javascript and it's simpler to use.

### **Diference between interfaz y types**

**Declaration Merging**

- When two interfaces with the same name are declared, it can merge these two interfaces.
- The TypeScript compiler will generate an error if the type keyword is used to declare two different types with the same variable names.

**Extends and Intersection**
The interfaces can be extended with type or by type alias.

```ts
interface PersonNameInterface { name: string }
interface Person1 extends PersonNameInterface { age: number }

type PersonNameType = { name: string }
interface Person2 extends PersonNameType { age: number }

class PersonClass { name = "Jhon" }
interface Person3 extends PersonClass { age: number }
```

Type, or type alias, cannot be extended and does not support this functionality,
However, we can combine numerous types into one type to form an intersection type by using the & keyword.

```ts
type PersonNameType = { name: string; }
type Person1 = PersonNameType & { age: number; }
```

**Implements and Union**
A class can implement an interface or type alias in the same way. But remember that a class and an interface are static blueprints.

As a result, they cannot implement or extend type aliases that refer to union types.

```ts
interface PersonInterface {
 name: string;
 age: number;
}

class John implements PersonInterface {
 name = "John";
 age = 26;
}

////////////////////////////////////////

type PersonType = {
 name: string;
 age: number;
};

class Ann implements PersonType {
 name = "Ann";
 age = 26;
}

////////////////////////////////////////

type UnionType = { name: string; } | { age: number; };

// Gives an error
class Joel implements UnionType {
 name = "Joel";
 age = 2;
}
```

**Type aliases**

TypeScript has advanced types that include a feature known as type aliases.
Type aliases allow us to change the name of a type without really defining a new type. Thus, we use the type keyword to make a new type alias.