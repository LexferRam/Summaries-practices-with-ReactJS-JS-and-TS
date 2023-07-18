# ReactJS - TypeScript

**useState** usa un genérico(al hacer hover):

```js
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
```

Ejemplo:

```js
type ImageItem = {id: string; url: string}

const [images, setImages] = useState<Array<ImageItem>>([])
```

**Tipos para eventos y callbacks listeners:**

cuando se le hace hover al attr onClick mostrará el tipo que debe tener el handler: **MouseEventHandler<HTMLButtonElement>** de esta forma teendremos acceso a todas las propiedades y tipado del objeto **event**

```js
<button onClick={addNewFox}>Add new fox</button>
```

**useRef hook**

Para identificar el type del generico que lleva el useRef, se debe hacer hover el el elemento que se le asignará el useRef, en este caso es una imagen, y se copia el tipo que muestra el hover:

NOTA: simepre que se importen tipos en react siempre usar la palabra clave "type" para que el compilador de TS los ignore al momento de hacer build

```js
  // se debe indicar al generic el tipo del elemento con el que trabajaremos e iniclizarlo
  // con este tipado podremos tener el autocompletados para la img gracias a TS
  const node = useRef<HTMLImageElement>(null)
```

**Componentes (genéricos) que extienden elementos del DOM.**

Cuando queremos agregarle tipos a los props de un componente custom genérico debemos extender de un elemento del DOM para que acepte por defecto los atributos de éste elemento sin tener que agregarlos manualmente en la interfaz de nuestro componente

**Para ver el tipo que necesitamos para extender de un elemento del DOM debemos hacer hover sobre el elemento en el JSX y ver el tipado que tiene, ya que éste tipo es el que usaremos para extender la interfaz del prop de nuestro componente, finalmente se debe hacer un destructuring con el spread operator y pasarlo al componente**

```js
    interface Props extends ImgHTMLAttributes<HTMLImageElement> {
        src: string;
    }

    const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
        ...
        ...

        return( 
            <img 
                ref={node} 
                src={currentSrc} 
                {...imgProps}
            />
        )   
    }
```

**Creando tipos propios para la aplicación**

* siempre se deben crear en un archivo con extension *.d.ts ejemplo app.d.ts
* Idealmente corresponden a entidades del contexto de la aplicación, ex: Usuario, Producto
* Usar "I" al inicio del nombre para indicar el tipo es global(es una convención)
* No Abusar de ellos. Podrían crecer sin control
* Empieza con tipos locales y expórtalos