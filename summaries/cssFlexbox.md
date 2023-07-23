# FlexBox CSS

Cuando definimos un container con display flex, todos los elementos hijos se convierten en flex-items, y el container se convierte en flex-container.

main axis (eje x)
cross axis (eje y)
main size (container width)
cross size (container height)


## Flex Container

por defecto coloca los item en direccion horizontal(row)
```css
.container {
    display: flex;
}
```

```css
.container {
    display: flex;
    flex-direction: row; /* row-reverse, column, column-reverse */
}
```

flex-wrap: si los items no caben en el container, los envia a la siguiente linea
```css
.container {
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap; /* wrap, wrap-reverse */
}
```

flex-flow: [flex-direction] [flex-wrap]
```css
.container {
    display: flex;
    flex-flow: row wrap; /* row-reverse, column, column-reverse */
}
```

justify-content: alinea los items en el main axis
```css
.container {
    display: flex;
    flex-flow: row wrap; 
    justify-content: flex-start; /* flex-end, center, space-between, space-around, space-evenly */
}
``` 

align-items: alinea los items en el cross axis
```css
.container {
    display: flex;
    flex-flow: row wrap; 
    justify-content: flex-start; 
    align-items: flex-start; /* flex-end, center, stretch, baseline */
}
```

align-content: alinea los items en el cross axis cuando hay mas de una linea
```css
.container {
    display: flex;
    flex-flow: row wrap; 
    justify-content: flex-start; 
    align-items: flex-start; 
    align-content: flex-start; /* flex-end, center, stretch, space-between, space-around */
}
```

gap: separacion entre los items
```css
.container {
    display: flex;
    flex-flow: row wrap; 
    justify-content: flex-start; 
    align-items: flex-start; 
    align-content: flex-start; 
    gap: 10px;
}
```

order: ordena los items dentro del container
```css  
.item {
    order: 1; /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
}
```

grow: crecimiento de los items
```css
.item {
    flex-grow: 1; /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
}
```

shrink: decrecimiento de los items- representa la velocidad con la que items se van a reducir tu tamaño 
```css
.item {
    flex-shrink: 1; /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
}
```

flex-basis: tamaño inicial de los items, es una forma de definir un max width
```css
.item {
    flex-basis: 100px; /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
}
```

flex: [grow] [shrink] [flex-basis], los valores por defecto son 0 1 auto
```css
.item {
    flex: 1 1 100px; /* 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
}
```

align-self: alinea los items en el cross axis de forma independiente
```css
.item {
    align-self: flex-start; /* flex-end, center, stretch, baseline */
}
```
