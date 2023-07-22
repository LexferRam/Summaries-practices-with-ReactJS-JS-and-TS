# Positions CSS

Nos definen el "Flujo" de nuestra pagina web, es decir, como se van a ir colocando los elementos en la pagina de forma natural.
Position nos permite modificar el flujo de la web y se encarga de decirle a nuestros elementos que tipo de referencia tiene que tomar para posicionarse, entonces dependiendo de cual usemos va a tomar una referencia diferente.

## **Relative**

Toma la posicion respectivamente a su posicion natural(su posicion inicial), vamos a tener acceso a top, left, right, bottom, y con esto vamos a poder mover el elemento de su posicion natural, pero no lo sacamos del flujo de la pagina(la posicion original se sigue conservando), es decir, los elementos que esten alrededor de este elemento van a seguir tomandolo en cuenta para posicionarse respetando la posicion original del elemento con position relatives.

## **Absolute**

Permite que el elemento se salte el flujo de la pagina web, los demas elementos no lo van a tomar en cuenta para posicionarse, es decir, los elementos que esten alrededor de este elemento no lo van a tomar en cuenta para posicionarse, no se queda un espacio reservado para el elemento con position absolute. Se posiciona con respecto a su elemento padre, si no tiene un elemento padre, se posiciona con respecto al body.

**NOTA:** podemos especificarle hasta que elemento queremos que se salte el flujo, si al padre de un elemento que tiene la propiedad "absolute" le ponemos position relative, es decir solo se saltará el flujo hasta el padre.

## **Fixed**

Salta todo el flujo de la web, pero toma como referencia los marcos del navegador.

## **Sticky**

Es una mezcla entre relative y fixed, es decir, se posiciona con respecto a su elemento padre, pero cuando llega a cierto punto se vuelve fixed, es decir, se posiciona con respecto a los marcos del navegador.