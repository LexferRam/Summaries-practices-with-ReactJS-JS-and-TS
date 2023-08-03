# Redux Toolkit

1. Instalar: `yarn add @reduxjs/toolkit redux-logger @types/redux-logger`

2. **Create the store app/store.ts:** 

```js
import {configureStore} from "@reduxjs/toolkit"
import logger from 'redux-logger'
import reservationsReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice"

export const store = configureStore({
    reducer:{
        todos: todoSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
```

3. **En el App o en index agregar el Provider:**
    
```js
import { Provider } from 'react-redux';
import { store } from './app/store';

//...

<Provider store={store}>
    <App />
</Provider>
```

4. **Crear carpeta "Features" para los distintos slices:**

```js
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: CustomerState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state,action:PayloadAction<Todo[]>) => {
            state.todos=action.payload;
        }
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

5. **En el componente que se quiera usar:**

```js
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../features/todoSlice";

// ...

  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todosList.todos)

    useEffect(() => {
    (async function():Promise<void>{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      dispatch(setTodos(data))
    })()
  },[dispatch])
```