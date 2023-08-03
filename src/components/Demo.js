import React, { useMemo, useState } from 'react';
import { findPrime } from '../utilis/helper';

const Demo = () => {
    const [text, setText] = useState(0);

    const[isDarkTheme, setIsDarkTheme] = useState(false);


 const prime = useMemo(() => findPrime(text), [text]);


  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " +
     (isDarkTheme && "bg-gray-300")}>
      <div>
        <input
        className="border border-black w-72 px-2"
        type="number"
         value={text}
         onChange={(e) => setText(e.target.value)} 
         />
      </div>
      <div>
<h1>nth Prime: {prime}</h1>
      </div>
      <div>
        <button className="bg-gray-100 border border-black p-2 ml-2"
        onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      </div>
      
    </div>
  );
};

export default Demo;
 