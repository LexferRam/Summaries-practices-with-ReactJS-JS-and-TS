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