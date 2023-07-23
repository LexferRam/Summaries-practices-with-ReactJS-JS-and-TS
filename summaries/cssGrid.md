# Grid CSS

Is a CSS layout method designed for the two-dimensional layout of items on a webpage.

```css
.grid {
    /* por defecto posiciona los elementos en columna */
    display: grid;

    /* definimos las columnas */
    /* grid-template-columns: 33% 33% 33%; */
    grid-template-columns: repeat(3, 1fr);

     /* definimos el alto de las filas 
        auto: se ajusta al contenido
        minmax(): define un rango de tamaño
     */
     /* grid-template-rows: auto 300px; */
     grid-auto-rows: minmax(100px, auto);

     /* espaciados */
     /* column-gap: 10px;
     row-gap: 10px; */
     gap: 1em;

     /* indica como se alinean los elementos horizontalmente */
     /* justify-items: center; */

     /* indica como se alinean los elementos verticalmente */
     /* align-items: center; */
}

.ele1{
    /* align-self: end;
    justify-self: end; */
    grid-column: 1/4;
}

.ele2{
    /* align-self: end;
    justify-self: end; */
    grid-column: 1/3;
    grid-row: 1/3;
}

.grid > div{
    color: black;
    background: #ecf0f1;
    padding: 1em;
}

.grid > div:hover{
    border: 1px solid #f1c40f;
}
```

## Grid template areas

is a property that allows us to name areas of our grid and then use those names when placing items on the grid.

example:

```css
    .grid {
        display: grid;
        gap: 1em;

        grid-template-areas: "ele1 ele2 ele3"
                            "ele4 ele4 ele4"
                            "ele5 ele5 ele6";
    }

    /* responsive con template area*/
    @media screen and (max-width: 320px) {
        .grid{
            grid-template-areas: "ele1 ele2"
                                "ele3 ele3"
                                "ele4 ele5"
                                "ele6 ele6";
        }
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
        .grid{
            grid-template-areas: "ele1 ele1"
                                "ele2 ele2"
                                "ele3 ele3"
                                "ele4 ele4"
                                "ele5 ele5"
                                "ele6 ele6";
        }
    }
```

```html
        <div className='grid'>
            <div className='ele1'>element1</div>
            <div className='ele2'>element2</div>
            <div className='ele3'>element3</div>
            <div className='ele4'>element4</div>
            <div className='ele5'>element5</div>
            <div className='ele6'>element6</div>
        </div>
```