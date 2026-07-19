import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import  "../styles/MainLayout.css"

function MainLayout({ children }) {
  return (
    <div className="layout">

      <aside className="navbar">
        <NavBar />
      </aside>

      <main className="content">

        <SearchBar />
        <Outlet />

      </main>

    </div>
  );
}

export default MainLayout;