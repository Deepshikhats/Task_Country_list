import ForwardIcon from '@/assets/_forward';
import PrevIcon from '@/assets/_prevIcon';
import { useCallback, useEffect, useState } from 'react';

const _images = [
  'https://picsum.photos/200/300?grayscale',
  'https://picsum.photos/seed/picsum/200/300',
  'https://loremflickr.com/cache/resized/7924_47303732392_d05c976297_n_320_240_nofilter.jpg',
];

/**
 * @namespace {Carousel}
 * @description -- Renders the carousel component
 * @returns {React.JSX.Element}
 */
const Carousel = () => {
  /*****************************HOOKS************************************ */
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setImageIndex((cv) => (_images.length - 1 === cv ? 0 : cv + 1));
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [_images]);

  /*****************************FUNCTION************************************ */

  /**
   * @function handleNextImage
   * @description handles current image index on clicking  forward icon
   */
  const handleNextImage = useCallback(() => {
    setImageIndex((currentIndex) =>
      currentIndex === _images.length - 1 ? 0 : currentIndex + 1
    );
  }, [_images.length]);

  /**
   * @function handlePrevImage
   * @description handles current image index on clicking  backward icon
   */
  const handlePrevImage = useCallback(() => {
    setImageIndex((currentIndex) =>
      currentIndex === 0 ? _images.length - 1 : currentIndex - 1
    );
  }, [_images.length]);

  return (
    <section className="carousal_container flex-column-reverse flex-lg-row ">
      <div className="carousal_img1 relative">
        <img src={_images[imageIndex]} alt="img1" />
        <div className="carousal_indicators">
          <button
            type="button"
            className="border-0 bg-transparent"
            onClick={handlePrevImage}
          >
            <PrevIcon />
          </button>
          {_images.map((_, index) => (
            <span
              className={`carousal_dots ${
                index === imageIndex ? 'carousal_dots_active' : ''
              }`}
              key={index}
            ></span>
          ))}
          <button
            type="button"
            className="border-0 bg-transparent"
            onClick={handleNextImage}
          >
            <ForwardIcon />
          </button>
        </div>
      </div>
      <div className="carousal_img2 flex-lg-grow-1">
        <img
          src={
            imageIndex === _images.length - 1
              ? _images[0]
              : _images[imageIndex + 1]
          }
          alt="img2"
        />
      </div>
    </section>
  );
};

export default Carousel;
