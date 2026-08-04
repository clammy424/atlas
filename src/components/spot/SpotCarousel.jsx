import "../../styles/components/spot/SpotCarousel.css";

function SpotCarousel({ media }) {
    const featuredMedia = media[0];

    return (
        <div className="spot-carousel" aria-label="Spot media carousel">
            <div className="spot-carousel-featured">
                <img src={featuredMedia.src} alt={featuredMedia.alt} />
            </div>

            {/* <div className="spot-carousel-thumbnails" aria-label="Additional spot images">
                {media.map((item, index) => (
                    <div className="spot-carousel-thumbnail" key={item.src}>
                        <img src={item.src} alt={item.alt} />
                        <span>{index + 1}</span>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default SpotCarousel;
