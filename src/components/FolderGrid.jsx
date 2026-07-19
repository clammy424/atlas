import "../styles/components/FolderGrid.css";
import FolderCard from "./FolderCard.jsx";

function FolderGrid({ folders }) {
    return (
        <div className="folder-grid">
            {folders.map((folder) => (
                <FolderCard key={folder.id} folder={folder} />
            ))}
        </div>
    );
}

export default FolderGrid;

