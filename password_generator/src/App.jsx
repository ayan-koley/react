import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);
  

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "123456789";
    if (charAllow) str += "@#$%^&*()_+!";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllow, numAllow, setPassword]);

  const copyPass = () => {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  }
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllow, numAllow]);
  return (
    <div className="h-screen w-full m-12 flex flex-col items-center">
      <div className="flex">
        <div>
          <input
            type="text"
            value={password}
            placeholder="Password Generator"
            readOnly
            className="border px-2 rounded py-1"
            ref={inputRef}
          />
        </div>
        <div>
          <button className="p-1 bg-blue-500 text-white ml-2 rounded" onClick={copyPass}>Copy</button>
        </div>
      </div>
      <div className="flex flex-col my-3">
        <div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            id="1"
          />
          <label htmlFor="1"> Length </label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              setnumAllow((prev) => !prev);
            }}
            checked={numAllow === true}
            id="2"
          />
          <label htmlFor="2">Number Allowed</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              setcharAllow((prev) => !prev);
            }}
            checked={charAllow === true}
            id="3"
          />
          <label htmlFor="3">Char Allowed</label>
        </div>
      </div>
    </div>
  );
}

export default App;
