import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className="bg-zinc-900 text-white h-screen w-full p-2">
        <h1 className="text-2xl font-bold tracking-tighter">
          my Cards here...
        </h1>
        <Cards title="Web Developer" />
        <Cards title="Web Designer" />
      </div>
    </>
  );
}

export default App;
