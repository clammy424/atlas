import { useState, useEffect, useRef } from "react";
import "../styles/TagBar.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function TagBar({ boards }) {
    const containerRef = useRef(null);
    const tagRefs = useRef([]);

    const [showRightArrow, setShowRightArrow] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const checkOverflow = () => {
        const container = containerRef.current;
        if (!container) return;

        const hasOverflow = container.scrollWidth > container.clientWidth;

        setShowRightArrow(
            hasOverflow &&
            container.scrollLeft <
                container.scrollWidth - container.clientWidth - 1
        );

        setShowLeftArrow(container.scrollLeft > 0);
    };

    useEffect(() => {
        checkOverflow();

        const container = containerRef.current;

        window.addEventListener("resize", checkOverflow);

        container?.addEventListener("scroll", checkOverflow);

        return () => {
            window.removeEventListener("resize", checkOverflow);
            container?.removeEventListener("scroll", checkOverflow);
        };
    }, [boards]);

    const scrollRight = () => {
        const container = containerRef.current;
        if (!container) return;

        const rightEdge = container.scrollLeft + container.clientWidth;

        let lastVisible = null;

        tagRefs.current.forEach((tag) => {
            if (!tag) return;

            const tagRight = tag.offsetLeft + tag.offsetWidth;

            if (tagRight <= rightEdge) {
                lastVisible = tag;
            }
        });

        if (!lastVisible) return;

        container.scrollTo({
            left: lastVisible.offsetLeft,
            behavior: "smooth",
        });
    };

    const scrollLeft = () => {
        const container = containerRef.current;
        if (!container) return;

        const leftEdge = container.scrollLeft;

        let previous = null;

        for (let i = tagRefs.current.length - 1; i >= 0; i--) {
            const tag = tagRefs.current[i];
            if (!tag) continue;

            if (tag.offsetLeft < leftEdge) {
                previous = tag;
                break;
            }
        }

        if (!previous) {
            container.scrollTo({
                left: 0,
                behavior: "smooth",
            });
            return;
        }

        container.scrollTo({
            left: previous.offsetLeft,
            behavior: "smooth",
        });
    };

    return (
        <div className="tagbar-wrapper">
            {showLeftArrow && (
                <button
                    className="scroll-button"
                    onClick={scrollLeft}
                >
                    <IoArrowBack/>
                </button>
            )}

            <div
                className="tagbar-container"
                ref={containerRef}
            >
                <div className="tags">
                    {boards.map((board, index) => (
                        <div
                            className="name"
                            key={board.name}
                            ref={(el) => (tagRefs.current[index] = el)}
                        >
                            {board.name}
                        </div>
                    ))}
                </div>
            </div>

            {showRightArrow && (
                <button
                    className="scroll-button"
                    onClick={scrollRight}
                >
                    <IoArrowForward/>
                </button>
            )}
        </div>
    );
}

export default TagBar;