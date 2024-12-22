import React from 'react'
import { useEffect } from 'react';
const Child = React.memo(({ increment }) => {
    console.log("Child component rendered!");
    return (
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    );
  });

export default Child