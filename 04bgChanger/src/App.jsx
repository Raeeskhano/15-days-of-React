import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="h-screen w-full flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap bg-white py-2 px-4 rounded-2xl gap-4 shadow-md">
        <button
          className="bg-red-800 text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>

        <button
          className="bg-green-800 text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>

        <button
          className="bg-yellow-800 text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>

        <button
          className="bg-pink-800 text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("pink");
          }}
        >
          Pink
        </button>

        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("gray");
          }}
        >
          Gray
        </button>

        <button
          className="bg-purple-800 text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("purple");
          }}
        >
          Purple
        </button>

        <button
          className="bg-white px-4 py-2 rounded-xl shadow-md"
          onClick={() => {
            setColor("white");
          }}
        >
          White
        </button>

        <button
          className="bg-black text-white px-4 py-2 rounded-xl shadow-2xl"
          onClick={() => {
            setColor("black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
