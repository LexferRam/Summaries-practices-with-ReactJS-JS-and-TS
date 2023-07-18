## Metodos js

**forEach()**

ejecuta una funcion por cada elemento del array.

**map(), filter()**

ambos son metodos inmutables(no modifican el array original) y retornan un array nuevo

**Find()**

retorna un obj si lo consigue o undefined si no lo consigue.

```js
array.find((item) => item.id === 12)
```

**FindIndex()**

retorna el index del obj si lo consigue o -1 si no lo consigue.

```js
array.find((item) => item.id === 12)
```

**reduce()**

reduce el array a un unico valor

```js

let arr = [1,2,3,4]

arr.reduce((acc, ele) => acc + ele, 0)

// exemple

    // create a function with reduce that receive a array and return an object where the key is the value of the array and the value is how many times the value is repeated in the array, please use typescript
    const countItems = (array: Array<string>): Record<string, number> => {
        return array.reduce((acc : Record<string, number>, item) => {
            // exite la propiedad en el objeto
            if(acc[item]){
                // se incrementa en 1 el valor de la propiedad
                acc[item] += 1
            } else {
                // se crea la propiedad con valor 1
                acc[item] = 1
            }
            return acc
        }, {})
    } 
```

**some()**

retorna true o false si el array cumple una condicion.

**every()**

es un metodo inmutable, retorna true o false si todos los elementos del array cumplen una condicion

```js
array.every((item) => item <= 12)
```

**includes()**

determina si un array incluye un determinado elemento, retorna true o false

```js
pets.includes('dog') // true o false
```

**join()**

une los elemento de un array mediante un separador que se le indique.

```js
const elementosArrayUnificadosPorEspacio = array.join(' ')
```

**concat()**

es inmutable y permite unir o concatenar arrays, generando un nuevo array

```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]

 const resp = arr1.concat(arr2)
```

**slice()**

El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.


```js
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
```

**array “merged” sin valores repetidos**

```js
const arrayA = ["Java","JavaScript"];
const arrayB = ["C#", "PHP" , "Java"];

const mergedArrays = [...new Set([...arrayA, ...arrayB])]
```

**flat()**

se utiliza cuando tenemos matrices y las queremos llevar a un array de una dimension, se le debe indicar el nivel al cual queremos aplanar

```js
matriz.flat(3)

matriz.flat(Infinite)
```

**flatMap()**

a medida que recorre el array va aplanando la matriz

```js
matriz.flatMap(user => user.attributes)
```

**Mutable methods**

.push() ==> agrega al array al final
.splice(index del ele, cantidad de elementos a eliminar a partir del index)

.sort()
 - por defacto Ordena alfabeticamente segun los caracteres ASCII

para ordenar arreglo de numeros:

numbers.sort((a,b) => a - b) // de menor a mayor
numbers.sort((a,b) => b - a) // de mayor a menor