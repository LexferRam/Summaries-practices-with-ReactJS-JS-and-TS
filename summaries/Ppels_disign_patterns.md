## Desgin principles 

Design principles are a set of guidelines that must be follow to create cleaner and scalable code.

* **SOLID**

	**S: Single responsibility** ==> a component must have only one reason to change.

	**O: Open-close** ==> a component must be open for extension and closed for modification.

	**L: Liskov substitution:** ==> to build software systems with replaceable parts, those parts must be adhere to a contract.

	**I: Interface segregation** ==> a component should not depend on things it does not need.
    
	**D: Dependency inversion** ==> Our code should depend on abstractions, not concretes.
    

* **DRY: ‘don’t repeat yourself,’** is a principle of software development that aims at reducing the repetition of patterns and code duplication in favor of abstractions and avoiding redundancy.

* **KISS (Keep it simple, Stupid!)** This principle states that try to keep each small piece of software simple and unnecessary complexity should be avoided. This helps us to write easy maintainable code.

----

## Design Pattern

Design patterns are solutions to common problems in the design of software.

**UI Patterns:** These patterns will help us create user interfaces that are maintainable and easy to extend.

- **Compound components** ==> is a technique where a component delegates the rendering of some of its parts to its children. This is a great pattern for creating components that have a complex internal structure.
Compound components helps developers build more expressive and flexible APIs to share state and logic within components.This pattern enclose the state and the behavior of a group of componets.

- **Render props :** technique for sharing code between React components using a props whose value is a function.

```js
<Button icon={(props) => <Icon {...props}>} >...</Button>

const Button = ({icon, text}) => {
    return(
        <button>
            {icon && icon({color: 'green'})}
            {text}
        </button>
    )
}
```

- **Exetensible styles o spread attributes:** Pattern that gives the UI type component the ability to extend its styles

```js
    function Button(props){

        const {primary, ...rest} = props;
        const className = primary ? 'btn btn-primary':'btn';

        return <button type="button" className={className} {...props}>
    }
```
- **Composition:** Composition tries to create a new component that internally uses other components to take advantage of the abilities that component already has.

```js
    function LoadingButton(props){

        const {loading, disabled, children, ..rest} = props;

        return(
            <Button disabled={disabled || loading} {...rest}>
                {children}
                {loading && <Loading/>}
            </Button>
        )
    }
```
- **Container and Presentation Components:** the responsibility of the container is to manage and control the behavior of the button. The presentation component is only responsible for the UI of the button.

```js
    function ButtonContainer(props){
        const {onClick, eventName, ...rest} = props;

        const handleClick = e => {
            if(eventName){
                //...
            }
            if(onClick){
                //...
            }
        }

        return <Button onClick={handleClick} {...rest} />
    }

    function Button(props){
        //..
    }

    export default ButtonContainer;
```

**Logic Patterns:** This is related to how we solve a logic problem. 

- **Custom Hooks:** These are js functions that allow us to abstract the state logic of a component according to our needs. The hooks facilitate the tests since they are js functions. They should be used when you want to reuse logic. Its name starts with "use".

- **HOC (High Order Components):** It is a pattern that is used to reuse behavior logic between react components. It is a function that receives a component by parameter and returns a new version of the component but with more logic, it is the minimum necessary to create this pattern. This pattern allows to eliminate duplication of logic between components, in addition to abstracting logic. Normally they start with the prefix "with".

**Note:**
ComponentType<P> is an alias for React. meaning the component that is passed into the HOC can be either a function component or class component

```js
import React, { useState } from 'react';

// First we need to add a type to let us extend the incoming component.
type ExtraInfoType = {
  extraInfo: string;
};
// Mark the function as a generic using P (or whatever variable you want)
export function withExtraInfo<P>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  WrappedComponent: React.ComponentType<P & ExtraInfoType>
) {
  const [extraInfo, setExtraInfo] = useState('');
  setExtraInfo('important data.');

  const ComponentWithExtraInfo = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    return <WrappedComponent {...props} extraInfo={extraInfo} />;
  };
  return ComponentWithExtraInfo;
}
```

**Another example:**

```js
import { useState } from 'react';

const withControlledForm = (Form, initialState = {}) => {

    const ControlledForm = ({ onSubmit }) => {

        const [formValues, setFormValues] = useState(initialState);

        const handleChange = e => {
            const {
                target: { name, value },
            } = e;
            setFormValues({ ...formValues, [name]: value });
        };

        const handleSubmit = e => {
            e.preventDefault();
            onSubmit(formValues);
        };

        return <Form formValues={formValues} handleChange={handleChange} handleSubmit={handleSubmit} />;
    };

    return ControlledForm;
};

const MyFormA = ({ formValues, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <p>Job Title</p>
                <input
                    type="text"
                    name="jobTitle"
                    value={formValues.jobTitle}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Send</button>
        </form>
    );
};

export const MyFormAControlled = withControlledForm(MyFormA, { name: 'Lexfer Ram', jobTitle: 'Developer' });
```

- **State Reducer:** This pattern allow a user to control how a child's state is managed.

- **Polimorphic components:** This pattern allows us to create components that can render different types of children.

```js
    function Button(props){
        const {children, ...rest} = props;

        return <button {...rest}>{children}</button>
    }

    function Link(props){
        const {children, ...rest} = props;

        return <a {...rest}>{children}</a>
    }

    function PolimorphicComponent(props){
        const {as: Component = 'button', ...rest} = props;

        return <Component {...rest} />
    }

    function App(){
        return(
            <div>
                <PolimorphicComponent as={Button} onClick={()=>{console.log('click')}}>Button</PolimorphicComponent>
                <PolimorphicComponent as={Link} href="https://google.com">Link</PolimorphicComponent>
            </div>
        )
    }
```

