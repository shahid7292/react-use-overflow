`react-use-overflow` determines whether an element exceeds its allotted size, causing overflow.

```bash
npm install react-use-overflow --save
```

```jsx
import { useOverflow } from "react-use-overflow";

const App = () => {
  const { isOverflow, ref } = useOverflow<HTMLDivElement>();
  const { horizontal, vertical } = isOverflow;
  // horizontal(boolean) indicates horizontal overflow
  // vertical(boolean) indicates vertical overflow

  return <div ref={ref}>Content</div>;
};

export default App;
```
