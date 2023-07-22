# BEM

BEM es una convención o metodología para nombrar tus clases de CSS. Por sus siglas en inglés, BEM significa Bloque, Elemento y Modificador.

* **Bloques**: son los componentes independientes de la interfaz de usuario, como un menú, un botón o un encabezado, que vamos a reutilizar en nuestro proyecto. Se puede tener bloques anidados.

* **Elementos**: son las partes que component a un bloque. Por ejemplo, un menú puede tener elementos como un ítem, un logo o un enlace.

* **Modificadores**: nos van a permitir modificar un bloque o un elemento. ejemplor de modificador(sintaxis): `bloque--modificador` o `bloque__elemento--modificador`


```html
    <div class="card"> <!-- Bloque: block__element -->

        <a href="#" class="card__thumbnail">
            <img src="card__img" alt="" />
        </a>

        <div class="card__text">

            <h3 class="card__titulo">
                <a class="card__link" href="#">
                    lorem ipsum 
                </a>
            </h3>

            <p calss="card__extracto">
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>

            <button class="button button--absolute boton--verde"><!-- Bloque (se pueden tener bloques dentro de bloques)-->
                <span class="button__text">Leer más</span>
                <i class="button__icon fas fas-arrow-right"></i>
            </button>
            
        </div>

    </div>
``` 

<https://bem-cheat-sheet.9elements.com/> ==> Cheat Sheet