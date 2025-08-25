// Exercise1.tsx
import { useState } from "react";

// TODO1:  ประกาศ Type ด้วย type หรือ inerface
interface GreetingProps {
  name: string;
  age: number;
}

type ID = string | number;

// TODO2: กำหนด Type ให้ props
const Greeting = (props: GreetingProps) => {
  // TODO3: กำหนด Type ให้ useState
  const [count, setCount] = useState<number>(0);
  const id: ID = 123;
  
  return (
    <div>
      <h1>
        Hello {props.name}, you are {props.age} years old 👋
        {id}
      </h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

// TODO4 : Render ออกมาใน App.tsx
export default Greeting;