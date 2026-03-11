import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <>
      <div className="w-[60vw] flex flex-col items-center mx-auto mt-12">
        <h1 className="text-xl font-bold ">Learning Redux toolKit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
