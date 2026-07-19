import "../styles/components/FolderCard.css";

function FolderCard({ folder }) {
    return (
        <article className="folder-card">
            <div className="folder-preview" aria-hidden="true">
                {folder.preview.map((color, index) => (
                    <span
                        key={`${folder.id}-${index}`}
                        className="folder-preview__tile"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div className="folder-card__top">
                <div>
                    <h3>{folder.name}</h3>
                    <p className="folder-count">{folder.count} posts</p>
                </div>
            </div>
            <div className="folder-card__tags">
                {folder.tags.map((tag) => (
                    <span className="folder-chip" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default FolderCard;
