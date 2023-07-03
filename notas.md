
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
