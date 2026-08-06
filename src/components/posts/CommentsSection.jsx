function CommentsSection({ comments }) {
    return (
        <section className="spot-comments" aria-labelledby="spot-comments-title">
            {/* <h2 id="spot-comments-title">Comments</h2> */}

            <div className="spot-comments-list">
                {comments.map((comment) => (
                    <article className="spot-comment" key={comment.id}>
                        <p className="spot-comment-username">{comment.username}</p>
                        <p>{comment.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default CommentsSection;
