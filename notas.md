
# tsconfig.json

* Docs: <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
* "sourceMap": true => permite ver la ejecución desde el archivo de ts
*  "removeComments": true ==> permite remover comentarios del js compilado
* Incluir o excluir carpetas o archivos de la compilacion (por defecto siempre se excluye la carpeta node_modules, no es recomendable excluirla):

```json
{
    "compilerOptions":{
        ...
    },
    "exclude":[
        "node_modules2"
    ],
    "exclude":[
        "node_modules"
    ]
}
```
* tipos de importaciones con Alias: 

```js
import * as HeroClasses from './classes/Hero'
import { Hero as SuperHero } from './classes/Hero'

// importacion por defecto 
import powers, { Power } from './data/powers'
```


### Diferencia entre clase e interfaz

La diferencia mas notable entre uno y otro, es que las clases poseen constructor y las interfaces no.

Esto es una ventaja para las clases sobre las interfaces ya que te permite crear propiedades y métodos estáticos.

Puedes crear una representación muy compleja de un objeto usando una clase.

Ahora si en el caso de que simplemente necesitas verificar tipos de un objeto, sin duda, utilizaría una interface, no se transpila a javascript y es mas simple de utilizar.

### Diferencia entre interfaz y types