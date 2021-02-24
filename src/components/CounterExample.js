import React, { useState } from 'react';

function CounterExample() {
    const [count, setCount] = useState(0);
     return (
        <div>
            <h1>
                {count}
             </h1>
             <h1 onClick={() => setCount(count+1)} title="Click">
                 Plus
             </h1>
             <h1 onClick={() => setCount(count-1)}>
                 Mins
             </h1>
        </div>
    )
}

export default CounterExample;
