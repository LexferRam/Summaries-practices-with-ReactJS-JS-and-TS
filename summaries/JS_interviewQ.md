# JavaScript

**What is Event Bubbling?**

Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
This is the default behavior of events on elements unless you stop the propagation.

```html
<body>
  <div>
    <span>
      <button>Click Me!</button>
    </span>
  </div>
</body>
```

So if the button receives a click event, for example, the span, div, and body (up until html, the root element) respectively receive that event

```js
const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})
```

when you click on the button, the console shows:

```js   
    button was clicked
    span was clicked
    div was clicked
    body was clicked
```

The stopPropagation method of an event prevents the event from propagating to the parents and ancestors of the element the event was triggered on:

```js
button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("button was clicked")
})
```

**What is Event delegation?**

it is an event-handling pattern that allows you to handle events at a higher level in the DOM tree.
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

```html
    <div>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
    </div>
```
```js
    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            console.log(event.target.innerText)
        })
    })
```

**What is an event loop in JavaScript?**

Event loop: An event loop is infinit loop that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.