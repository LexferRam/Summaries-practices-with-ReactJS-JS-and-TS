# ReactJS interview questions

**Synthetic events**

are the wrapper that React uses to standardise event functionality across browsers. It is important to remember that events are not part of core Javascript. Instead, they come from each browser's own Javascript API — meaning that how browsers handle events will differ.

**CodeSplitting**

Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

**Reconciliation algorithm**

The reconciliation algorithm is the process React uses to update the DOM in response to changes in the component state.
When a component’s state changes, React will re-render the component and its children. The reconciliation algorithm is responsible for determining what has changed in the component tree and updating the DOM accordingly.
React uses a virtual DOM (VDOM) to represent the structure of the components in memory.The virtual DOM is a lightweight in-memory representation of the DOM, and it's used by React to compare the new state of the component tree with the previous state.
If there are any differences, React will update the real DOM to match the new state.

**How does the reconciliation algorithm work?**

The reconciliation algorithm starts by comparing the virtual DOM of the previous state with the virtual DOM of the new state.
If there are no differences, React will not make any changes to the real DOM. If there are differences, React will update the real DOM to match the new state.

**Virtual DOM**

The virtual DOM is a lightweight in-memory representation of the DOM, and it's used by React to compare the new state of the component tree with the previous state.

**JSWT**

JSON Web Token (JWT) authentication is a stateless method of securely transmitting information between parties as a JavaScript Object Notation (JSON) object. It is often used to authenticate and authorize users in web applications and APIs.

**Optimizing the performance using Keys**

In React, the use of keys is important when rendering a list of elements. Keys are a special string attribute that you can provide to elements in a list to help React keep track of which items are added, deleted, or changed.
However, without the use of keys, React has no way of knowing which items have been added, deleted, or changed. As a result, React may end up unnecessarily recreating all of the li elements, even if only a single name has changed. This can lead to decreased performance, especially for long lists.
It's important to note that the value of the key should be unique among the siblings, but doesn't have to be globally unique. It's also not recommended to use indexes as keys, because they can lead to unexpected behavior when items are reordered or deleted.

**Difference between diff and reconciliation algorithm**

The diff algorithm refers to the process of comparing two trees of nodes, such as the virtual DOM trees in React, to determine the differences between them. The diff algorithm determines the minimum number of operations required to transform one tree into another.

The reconciliation algorithm refers to the overall process of updating the DOM in response to changes in the component state. The reconciliation algorithm includes the diff algorithm as one of its steps, but it also includes additional steps such as unmounting and mounting components, updating component properties, and handling error cases.

**Difference between state and props**

Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function.

**Optimizing performance in a React app**

To successfully optimize our React application, we must first find a performance problem in our application to rectify:

1. **Keeping component state local where necessary**
a state update in a parent component re-renders the parent and its child components.
Sometimes, we cannot avoid having a state in a global component while passing it down to child components as a prop. In this case, let’s learn how to avoid re-rendering the unaffected child components.

2. **Profiling the React app to locate bottlenecks**
React allows us to measure the performance of our apps using the profiler in the React Developer Tools. 
The profiler records how long it takes a component to render, why a component is rendering, and more. From there, we can investigate the affected component and provide the necessary optimization.

3. **Memoizing React components to prevent unnecessary re-renders**
    * Implementing React.memo()
    Is a higher-order component used to wrap a purely functional component to prevent re-rendering if the props received in that component never change

```js
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} />
    </div>
  );
}

// ChildComponent only renders when count prop changes
const ChildComponent = React.memo(function ChildComponent({ count }) {
  console.log("child component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <h4>Count: {count}</h4>
    </div>
  );
});
```

4. **Using the useCallback and useMemo Hooks**

    1. The **useMemo** is a hook used in the functional component of react that returns a memoized value.Is used for caching a specific expensive calculation or value.
    2. **useCallback**  is a React Hook that lets you cache a function definition between re-renders.

5. **Code splitting in React using dynamic import()**

With code-splitting, React allows us to split a large bundle file into multiple chunks using dynamic import() followed by lazy loading these chunks on demand using React.lazy. This strategy greatly improves the page performance of a complex React application.

```js
    const Home = React.lazy(() => import("./components/Home"));
    const About = React.lazy(() => import("./components/About"));
```

This syntax tells React to load each component dynamically. So, when a user follows a link to the homepage, for instance, React only downloads the file for the requested page instead of loading a large bundle file for the entire application. After the import, we must render the lazy components inside a Suspense component, like so:

```js
    <React.Suspense fallback={<p>Loading page...</p>}>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
    </React.Suspense>
```

The Suspense allows us to display a loading text or indicator as a fallback while React waits to render the lazy component in the UI.

6. **Windowing or list virtualization**

Imagine we have an application where we render several rows of items on a page. Whether or not any of the items display in the browser viewport, they render in the DOM and may affect the performance of our application.

With the concept of windowing, we can render to the DOM only the visible portion to the user. Then, when scrolling, the remaining list items render while replacing the items that exit the viewport. This technique can greatly improve the rendering performance of a large list. Both **react-window** and **react-virtualized** are two popular windowing libraries that can implement this concept.

7. **Lazy loading images**

To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.

Similar to the concept of windowing mentioned above, lazy loading images prevents the creation of unnecessary DOM nodes, boosting the performance of our React application.
**react-lazyload** and **react-lazy-load-image-component** are popular lazy-loading libraries that can be used in React projects.

**Types of rendering in ReactJS/NextJS**

* **Client Side Rendering(CSR):** allows developers to make their websites entirely rendered in the browser with JavaScript.

* **Server Side Rendering(SSR):** 
is used to render web pages on the server before sending them to the client. This allows for faster page loads, improved performance, and an SEO-friendly rendering solution for React applications.

* **Static Site Generation(SSG):** 
the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build.

* **Incremental Static Regeneration(ISR):**
 allows the regeneration of static pages during runtime that means you can update content on your site without redeploying. It’s a hybrid solution of SSG and SSR.

8. **what is Vite**

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

* A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
* A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite was designed with speed in mind. It takes advantage of modern browser features like ES modules to provide near-instantaneous page reloads during development. This means that developers can make changes to their code and see the results in the browser without waiting for a full build process. Vite accomplishes this by bundling and serving the code on the fly, rather than creating a pre-built bundle. Vite also supports asynchronous loading of modules, which allows it to load only the necessary parts of the code that are needed at the time. This approach significantly reduces the amount of time required to build and serve a web application.


9. **JS Custom event**

```js
    // listenig custom event
    useEffect(() => { 
        const handleCallEvent = ((event: CustomEvent<boolean>) => { 
            console.log(event.detail) 
        }) as any 
            window.addEventListener("testEvent", handleCallEvent) 
            return () => window.removeEventListener("testEvent", handleCallEvent) 
    }, [])

    //executing custom event
    <button
        onClick={() => {
            const event = new CustomEvent("testEvent", { detail: 'test' } );
            window.dispatchEvent(event);
        }}
    >
        Custom Event
    </button>
```

10. **Functional updates**

If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value.
useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:
  
  ```js
      const [state, setState] = useState({});
      setState(prevState => {
          // Object.assign would also work
          return {...prevState, ...updatedValues};
      });
  ```

  11. **Life cycles methods**

  * **componentDidMount()**
  This method is invoked immediately after a component is mounted. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

  * **componentDidUpdate()**
  This method is invoked immediately after updating occurs. This method is not called for the initial render.

  * **componentWillUnmount()**
  This method is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

  * **componentDidCatch()**
  This method is invoked when an error occurs during rendering, in a lifecycle method, or in the constructor of any child component.

  