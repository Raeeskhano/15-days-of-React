import { useCallback, useEffect, useState, useRef, use } from "react";

function App() {
  //states variables using useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("abcd");

  const passwordRef = useRef(null);

  //passGenerator function & useCallback hook to memeoiz function
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str = str + "0123456789";
    if (charAllowed) str = str + "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //copy pasToClipboard function
  const copyToclipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useEffect hook to call passGenerator function when any dependency changes
  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, passGenerator]);

  return (
    <>
      <div className="flex justify-center items-center bg-zinc-950 min-h-screen w-full">
        <div className="bg-zinc-900 p-4 rounded-md text-center">
          <h1 className="text-center p-4 text-2xl font-semibold tracking-tighter text-zinc-400">
            Password Generator🔏
          </h1>
          <input
            className="bg-zinc-300 px-2 py-1 rounded-l-md outline-none w-100"
            type="text"
            placeholder="password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 px-2 py-1 rounded-r-md cursor-pointer hover:bg-blue-700 duration-300"
            onClick={copyToclipboard}
          >
            Copy
          </button>

          <div className="text-zinc-400 flex gap-4 justify-center mt-4">
            <input
              type="range"
              min={3}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-zinc-400">length({length})</span>

            <input
              type="checkbox"
              id="id1"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="id1">Numbers</label>

            <input
              type="checkbox"
              id="id2"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="id2">Charecters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
