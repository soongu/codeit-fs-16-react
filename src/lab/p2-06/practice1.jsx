import { useState } from 'react';

const CounterA = () => {
  console.log('CounterA 실행');

  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>A {count}</button>;
};

const CounterB = () => {
  console.log('CounterB 실행');

  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>B {count}</button>;
};

const LabPanel = () => {
  console.log('LabPanel 실행');

  return (
    <div>
      <CounterA />
      <CounterB />
    </div>
  );
};

export default LabPanel;
