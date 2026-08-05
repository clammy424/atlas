import { Outlet } from "react-router-dom";

import boards from "../data/boards.jsx"

import NavBar from "../components/NavBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TagBar from "../components/TagBar.jsx";
import  "../styles/MainLayout.css"

function MainLayout({ children }) {
  return (
    <div className="layout">

      <aside className="navbar">
        <NavBar />
      </aside>

      <main className="content">

        <SearchBar />
        <TagBar boards={boards}/>

        <Outlet />

      </main>

    </div>
  );
}

export default MainLayout;