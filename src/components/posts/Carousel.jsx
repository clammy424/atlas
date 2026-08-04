import "../../styles/components/posts/Carousel.css";

function Carousel({ media }) {
    const featuredMedia = media[0];

    return (
        // TODO: Add carousel functionality (e.g. next/prev buttons, swipe gestures (later), active post indicator)
        <div className="carousel" aria-label="Spot media carousel">
            <div className="carousel-featured">
                <img src={featuredMedia.src} alt={featuredMedia.alt} />
            </div>

            {/* <div className="carousel-thumbnails" aria-label="Additional spot images">
                {media.map((item, index) => (
                    <div className="carousel-thumbnail" key={item.src}>
                        <img src={item.src} alt={item.alt} />
                        <span>{index + 1}</span>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Carousel;