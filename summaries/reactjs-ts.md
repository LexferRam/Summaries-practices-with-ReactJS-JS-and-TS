# ReactJS - TypeScript

**useState** usa un genérico(al hacer hover):

```js
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
```

**Example interface for component that receive a state and Fn to update that state**

```js
interface DummyProps {
    number: number,
    setNumber: Dispatch<setStateAction<number>>
}
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

**JSX.Element y FC<>**

**JSX.Element** is the data type used to render JSX elements at runtime.
* Is used to render JSX elements at runtime
* A JSX element is simply a coded representation of a DOM element
* **JSX.Element works when you want to create a component without props**

```js
const element: JSX.Element = <div>Hello, world!</div>;
```

**React.FC** 

* Is used to render a React component function
* React component function is a function that returns a JSX element
* You can specify the type of properties that a component accepts by using an interface
* **React.FC works when you want to pass props with definitions of the interface**

```js
import React from 'react';

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};
```

**Context with typeScript**

```js
import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

const initialState = {
    title: 'Hello world'
}

interface IAppProvider {
    children: ReactNode
}

const AppContext = createContext<typeof initialState>(initialState)

export const AppProvider = ({ children }: IAppProvider): JSX.Element =>(
    <AppContext.Provider value={initialState}>
        {children}
    </AppContext.Provider>
)

export const useAppContext = () => useContext<typeof initialState>(AppContext)
```

**useReducer with Typescript**

The useReducer hook is a hook that allows you to create a state, update it, and share its data across different components. (Its core logic is similar to Redux.)

It takes a reducer-function and an initial state as arguments and returns a tuple of a new state and a dispatch function.

In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.

**Example 1:**

```js
import { useReducer } from "react";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}
```

**Example 2:**

```js
import { useReducer } from 'react'
import type { MouseEventHandler } from 'react'
import axios from 'axios'

interface ITodo {
    id: number,
    title: string,
    userId: number,
    completed: boolean
}

type State = {
    value: number;
    todos: ITodo[];
    loading: boolean;
}

enum ActionKind {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
    Call_API = 'CALL_API',
    Set_loading = 'SET_LOADING'
}

type Action = {
    type: ActionKind,
    payload: any
}

type ACTIONTYPE =
  | { type: ActionKind.Increase; payload: number }
  | { type: ActionKind.Decrease; payload: number }
  | { type: ActionKind.Call_API; payload: ITodo[] }
  | { type: ActionKind.Set_loading; payload: boolean }

const initialCounterState: State = {
    value: 0,
    todos: [],
    loading: false
}

const increaseAction: Action = {
    type: ActionKind.Increase,
    payload: 1
}

const decreaseAction: Action = {
    type: ActionKind.Decrease,
    payload: 1
}

function counterReducer(state: State, action: ACTIONTYPE): State {
    const { type, payload } = action;
    switch (type) {
        case ActionKind.Increase:
            return {
                ...state,
                value: state.value + payload
            }
        case ActionKind.Decrease:
            return {
                ...state,
                value: state.value - payload
            }
        case ActionKind.Call_API:
            return {
                ...state,
                todos: payload
            }
        case ActionKind.Set_loading:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}

const App2 = (): JSX.Element => {

    const [state, dispatch] = useReducer(counterReducer, initialCounterState);

    const handleClick: MouseEventHandler<HTMLButtonElement> = async (): Promise<void> => {
        dispatch({ type: ActionKind.Set_loading, payload: true })
        const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
        dispatch({ type: ActionKind.Call_API, payload: data })
        dispatch({ type: ActionKind.Set_loading, payload: false })
    }

    return (
        <>
            <div>
                Count: {state.value}
                <button onClick={() => dispatch(decreaseAction)}>
                    -
                </button>
                <button onClick={() => dispatch(increaseAction)}>
                    +
                </button>
                <button
                    onClick={handleClick}>
                    Call API
                </button>
            </div>
            <div>

                {state.loading && <h2>Loading...</h2>}

                {state.todos.map((todo) => (
                    <h5 key={todo.id}>{todo.title}</h5>
                ))}

            </div>
        </>
    )
}

export default App2
```



