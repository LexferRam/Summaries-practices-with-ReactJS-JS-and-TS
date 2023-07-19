# JavaScript

**What is Event Bubbling?**

Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
This is the default behavior of events on elements unless you stop the propagation.

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