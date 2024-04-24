import Header from "./components/molecules/header/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
