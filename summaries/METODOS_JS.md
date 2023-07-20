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

**Inmutabilidad**
Una de las características más importantes de los lenguajes funcionales es que sus estructuras de datos son inmutables lo que ayuda a reducir la complejidad del software. Un valor inmutable es algo que no puede ser cambiado.

¿Entonces que hacer cuando necesitas un objeto o valor idéntico al original pero solo con algunos atributos diferentes?. Hasta ahora lo que hacíamos es mutar la variable original y continuar con nuestras vidas. Pero si consideramos esa variable inmutable entonces tendremos que hacer una copia y manipular la copia en vez del original.

¿Por qué la inmutabilidad es importante?
Básicamente porque te permite representar estados de forma correcta y eliminar los "side effects".  Es mucho más fácil seguir la lógica de un software que no modifica sus variables que uno que permite que sus variables cambien a diestra y siniestra.

Entonces, queremos asegurarnos de que nuestros objetos no sean mutados. En esencia lo que necesitamos es una función pura.
Una función pura tiene dos propiedades esenciales: El valor que retorna depende sólo de los argumentos de entrada. O lo que es lo mismo, el valor de retorno no cambiará si los valores de entrada no cambian. No tiene efectos secundarios. Esto significa que no puede modificar ninguna variable fuera de su alcance.

**forma para mantener el principio de inmutabilidad:**
Operador spread. permite crear un nuevo objeto copiando las propiedades de otro objeto. Es decir, crea una copia superficial del objeto original.

```js
let newObj = {...data, attribute: 'something' }
```

**Arreglos**

El objeto Array define algunas **operaciones mutables**, es decir, modifican el arreglo original al operar sobre el: push, pop, splice, shift,unshift, reverse y sort. Usar estos métodos implica la existencia de side effects y posibles bugs difíciles de rastrear.

**operaciones mutables**, Transformemos estos métodos para funcionar de forma inmutables:

**Push**

```js
const newUsuarios = [...usuarios, newUser ]
```

**Unshift**

```js
const newUsuarios = [newUser, ...usuarios]
```

**Pop**

```js
const newUsuarios = usuarios.slice(0, usuarios.length - 1)
const user = usuarios[usuarios.length - 1];
```

**Shift**

```js
const user = usuarios[0];
const newUsuarios = usuarios.slice(1)
```

**Splice**

Para transformar esta operación en inmutable nuevamente hacemos uso de splice y  el operador  spread

```js
const newUsuarios = [...usuarios.slice(0,1), newUser, ...usuarios.slice(3)]
```

**Sort y reverse**

Obtenemos una copia del arreglo y operamos sobre esta copia.

```js
    const sorted = [...usuarios].sort(compare)
    const inverted = [...usuarios].reverse()
    const sortedAndInverted = [...sorted].reverse()
```

**¿Qué es la programación funcional?**

La programación funcional es un paradigma de programación o un estilo de programación que se basa en gran medida en el uso de funciones puras, que son funciones que no tienen efectos secundarios y son aisladas.

**Hay cuatro tipos principales de funciones.**

1. **Funciones de primera clase:** En JavaScript, todas las funciones son funciones de primera clase. Eso significa que pueden tratarse como cualquier otra variable. Pueden asignarse a variables, pueden pasarse como argumentos a otras funciones y pueden devolverse como valores de otras funciones.

2. **Funciones Callback:** Una función de devolución de llamada es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

3. **Funciones de orden superior(High Order Funtion):** Una función de orden superior es una función que acepta otras funciones como argumentos o devuelve una función como valor de retorno.


**Principios de la programación funcional**

* Evite mutaciones y efectos secundarios.
* Abstracción: Las abstracciones ocultan detalles y nos permiten hablar sobre problemas en un nivel superior 