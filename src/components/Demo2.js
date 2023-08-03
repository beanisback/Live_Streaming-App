import React, { useEffect, useRef, useState } from 'react';


const Demo2 = () => {
    const[y, setY] = useState(0);
let x = 10;

const ref = useRef(0);

console.log("Rendering...");

const i = useRef(null);
useEffect(() => {
   i.current =  setInterval(() => {
        console.log("hi", Math.random());
    },1000)

    return() => clearInterval(i.current);

},[]);


  return (
    <div className="m-2 p-2 bg-plate-50 border border-black w-96 h-96">
      <div>
        <button 
           className="p-2 m-2 bg-slate-200"
           onClick={() => {
            x = x + 1;
           }}
           >
            Increase x
            </button>
        <span className="font-bold text-xl">let = {x}</span>
      </div>
      <div>
        <button 
           className="p-2 m-2 bg-slate-200"
           onClick={() => {
            setY(y + 1);
           }}
           >
            Increase Y
            </button>
        <span className="font-bold text-xl">state = {y}</span>
      </div>
      <div>
        <button 
           className="p-2 m-2 bg-slate-200"
           onClick={() => {
          ref.current = ref.current + 1;
           }}
           >
            Increase Ref
            </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button className="bg-red-300 p-2 m-2 border border-purple-200 font-bold"
      onClick={() => {
        clearInterval(i.current);
      }
    }
      >
Stop Printing 
      </button>
    </div>
  );
};

export default Demo2;
