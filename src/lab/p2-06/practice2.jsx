import { useState } from 'react';

const CounterView = ({ label, count, onCounterClick }) => {
  console.log(`CounterView ${label} 실행`);
  return (
    <button onClick={onCounterClick}>
      {label} {count}
    </button>
  );
};

const LiftedPanel = () => {
  console.log('LiftedPanel 실행');

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <CounterView
        label='A'
        count={countA}
        onCounterClick={() => setCountA(countA + 1)}
      />
      <CounterView
        label='B'
        count={countB}
        onCounterClick={() => setCountB(countB + 1)}
      />
    </>
  );
};

export default LiftedPanel;