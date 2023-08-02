# Error handling in ReactJS

We can divide errors broadly into two types:

1. **JavaScript errors**

JavaScript errors are those which occur in the code and can be handled with standard try/catch blocks

2. **Render errors**

render errors occur in the view templates and are handled by React error boundaries.

**Error boundaries:**

Allows you to define components that act as error-catching mechanisms for the component tree below them.
React provides two lifecycle methods that a component can implement to determine if a rendering error has occurred in its child tree.
These two methods are componentDidCatch() and static getDerivedStateFromError().
To handle the errros that are thronw during the rendering phase we can use an Error Boundary which is a React component that catches JavaScript errors anywhere in their child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed.

**Error boundary catches only errors that happen during React lifecycle.**Things that happen outside of it, like resolved promises, async code with setTimeout, various callbacks and event handlers, will just disappear if not dealt with explicitly.

```js
import { ErrorBoundary } from './error-boundary';
import { FinalErrorBoundary } from './final-error-boundary';

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('Crash de la aplicacion!');
  }

  return <button onClick={handleCrash}>Crashear la app</button>;
};

export const RenderPropsPage = () => (
  <>
    <h2>Ejemplo sin Render Props</h2>
    <ErrorBoundary>
      <MyBug />
    </ErrorBoundary>
    <hr />
    <h2>Ejemplo con render props</h2>
    <FinalErrorBoundary render={(error) => <p>{`Ups D: ${error}`}</p>}>
      <MyBug />
    </FinalErrorBoundary>
  </>
);
```

**final-error-boundary.js with render-props pattern :**

```js
import { Component } from 'react';

export class FinalErrorBoundary extends Component {
    state = { hasError: false, error: null };

    componentDidCatch(error) {
        this.setState({ hasError: true, error });
    }

    render() {
        const { hasError, error } = this.state;
        const { children } = this.props;

        if (hasError && !this.props.render) {
            return (
                <div>
                    <p>Oops! ha ocurrido un error inesperado</p>
                    {error.toString()}
                </div>
            );
        };

        if (hasError && this.props.render) {
            return this.props.render(error);
        };

        return children;
    }
}
```

**Error boundary:**

```js
export class ErrorBoundary extends Component {
  state = {hasError: false, error: null};

  componentDidCatch(error) {
    this.setState({hasError: true, error});
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    if (hasError) {
      return (
        <div>
          <p>Oops! ha ocurrido un error inesperado</p>
          {error.toString()}
        </div>
      );
    }

    return children;
  }
}
```
