import { useState } from "react";

function App() {
  const [bg, setBg] = useState("black");
  const handleBg = (e) => {
    console.log("e value", e.target.value)
    setBg(e.target.value)
  } 

  return (
    <div className="h-screen w-full" style={{backgroundColor: bg}}>
      <div>
        <button onClick={handleBg} className="p-3 m-5 rounded border" value={"green"} style={{backgroundColor: 'green'}}>
          Green
        </button>
        <button onClick={(e) => {setBg(e.target.value)}} className="p-3 m-5 rounded border" value={"yellow"} style={{backgroundColor: 'yellow'}}>
          Yellow
        </button>
        <button onClick={(e) => {handleBg(e)}} className="p-3 m-5 rounded border" value={"aqua"} style={{backgroundColor: 'aqua'}}>
          aqua
        </button>
        <button onClick={() => setBg("white")} className="p-3 m-5 rounded border" value={"white"} style={{backgroundColor: 'white'}}>
          White
        </button>
      </div>
    </div>
  );
}

export default App;
