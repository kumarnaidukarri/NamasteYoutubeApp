// 'useMemo()' hook

import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Heavy Operation
  // const prime = findNthPrime(num);
  const prime = useMemo(() => findNthPrime(num), [num]); // useMemo(callback, dependency)

  return (
    <div
      className={isDarkTheme ? "bg-black text-white" : "bg-white text-black"}
    >
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Toggle mode button
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
        className="ml-2 pl-2 border"
      />
      <h1> prime number is: {prime} </h1>
    </div>
  );
};

export default Demo;

// * Hooks -

// 1. useMemo()
/*
 caches (memoizes) the result of a calculation so that it does NOT recalculate unless its dependencies change.
 syntax:
  const cachedValue = useMemo(() => expensiveFunction(arg), [arg]);

 If arg doesn’t change → return cached value
 If arg changes        → recompute expensiveFunction(arg)

 prime(5);  // caches result
 prime(5);  // skips re-calculation and uses cached result
 prime(5);  // uses cached result
 prime(12); // call, calculates value, makes new cache value
*/

// 2. useCallback()
/* used to 'Cache' a function definition between "re-renders".
   i.e, we memorize heavy 'Function declarations definitions'.
   syntax: let cachedFn = useCallback(fn, dependencies);
*/

// 3. useRef()
/* used to "reference a value" that is not needed for rendering.
   it returns an Object with the passed value.  {current: value}
   syntax: let ref = useRef(intialValue);  // {current: initialValue}
           ref.current = ref.current + 1;
*/
