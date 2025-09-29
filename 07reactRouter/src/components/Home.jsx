import About from "./About";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Outlet />
    </div>
  );
};

export default Home;
