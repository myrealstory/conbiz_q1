
import { useState } from "react";
import "./App.css";
import { Q1 } from "./components/Q1";
import { Q6 } from "./components/Q6";
import { Q5 } from "./components/Q5";
import { Q4 } from "./components/Q4";
import { Q3 } from "./components/Q3";
import { Q2 } from "./components/Q2";

function App() {

  const [ currentPage , setCurrentPage ] = useState(1);
  const page = [
    {
      id:1,
      page: <Q1/>
    },
    {
      id:2,
      page: <Q2/>
    },
    {
      id:3,
      page: <Q3/>
    },
    {
      id:4,
      page: <Q4/>
    },
    {
      id:5,
      page: <Q5/>
    },
    {
      id:6,
      page: <Q6/>
    },
  ];

  return (
    <div className="App">
      <header className="App-header flex justify-center items-center">
        <h1 className="mb-6 text-lg font-medium px-4 py-2 border border-white border-solid">Current Page: {currentPage}</h1>
        <div className="max-w-[1000px] w-full h-full bg-white overflow-hidden rounded-xl">
          <div className="grid grid-cols-6">
            {page.map((item)=> (
              <button 
                className={`shadow-md border-b  text-xl py-3  hover:bg-black/20 hover:text-white ${item.id === currentPage ? 'bg-black/60 text-white' : 'text-black/70 bg-white'}`}
                key={item.id}
                onClick={()=> setCurrentPage(item.id)}
                >
                {item.id}
              </button>
            ))}
          </div>
          {page.filter((item)=> item.id === currentPage).map((item)=> (
            <div key={item.id} className="h-full w-full overflow-y-auto max-h-[700px]">
              {item.page}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
