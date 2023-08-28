import React, { useState } from 'react';
import { Button } from 'components/Button/Button';
interface Props {}

export function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <Button handleClick={handleClick}>Click</Button>
      <div>Counter</div>
    </div>
  );
}
