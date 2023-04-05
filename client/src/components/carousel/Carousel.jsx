import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./carousel.css";

const Carousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  });
  const rafId = useRef(0); // requestAnimationFrame ID

  const animate = useCallback(() => {
    if (!embla || !rafId.current) return;

    const engine = embla.internalEngine();
    engine.location.add(-1);
    engine.target.set(engine.location);
    engine.scrollLooper.loop(-1);
    engine.slideLooper.loop();
    engine.translate.to(engine.location);
    rafId.current = requestAnimationFrame(animate);
  }, [embla]);

  const startAutoScroll = useCallback(() => {
    rafId.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAutoScroll = useCallback(() => {
    rafId.current = cancelAnimationFrame(rafId.current) || 0;
  }, []);

  useEffect(() => {
    if (!embla) return;

    embla.on("pointerDown", stopAutoScroll);
    embla.on("settle", startAutoScroll);

    startAutoScroll();
    return () => stopAutoScroll();
  }, [embla, startAutoScroll, stopAutoScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {data.map((e, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla-message">
                <p>{e.message}</p>
              </div>
              <hr />
              <div className="embla-slider-box">
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={e.img}
                    alt="A cool cat."
                  />
                </div>
                <div>
                  <div className="embla-name">{e.name}</div>
                  <div className="embla-position">{e.position}</div>
                </div>
                <LinkedInIcon style={{ color: "blue" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
