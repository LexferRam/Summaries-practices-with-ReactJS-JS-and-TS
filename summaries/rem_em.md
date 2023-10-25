# REM & EM (Medidas relativas)


* Por defecto los navegadores colocan un margin y un pading a todos elementos html **Se debe reiniciar estos estilos por defectos con la propiedar CSS con el selector universal asterisco**

```css

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

```

* por defecto el valor del fontSize root element que dan los navegadores es de **16px**, todos los element html lo heredan


## EM(medida relativa) : toma el tamaño de fuente que tenga el padre directo

## REM(medida relativa) : toma el tamaño de fuente que tenga el elemento root HTML (es el valor que el navegador le agrega al elemento html por defecto = 16px)

```css
html{
   font-size: 62.5%; 
   /* 
    se formatea el Root element a 10px, ya que nos facilita el uso de la medida relativa REM,
    por ejemplo si colocamos 1.6rem sabremos facilmente que representa a 16px
   */ 
}
```

**NOTA:**
Estilos que debemos colocar para resetear nuestros estilos globales de un proyecto:

```css
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{
   font-size: 62.5%; 
}
```

