import { h } from 'preact'
import { useState } from 'preact/hooks'

interface SliderProps {
  images: string[]
}

const Slider = ({ images }: SliderProps) => {
  const totalImages = images?.length

  const [visibleImage, setVisibleImage] = useState(0)

  const handleNextImage = () => {
    setVisibleImage(visibleImage === totalImages - 1 ? 0 : visibleImage + 1)
  }

  const handlePrevImage = () => {
    setVisibleImage(visibleImage === 0 ? totalImages - 1 : visibleImage - 1)
  }

  return (
    <section className="sliderContainer">
      <button onClick={handlePrevImage} className="sliderArrows sliderArrowLeft">
        &#8249;
      </button>
      {images.map((image, index) => (
        <div key={image} className="sliderContent">
          {visibleImage === index && <img className="sliderImage" src={image} alt={index.toString()} />}
        </div>
      ))}
      <button onClick={handleNextImage} className="sliderArrows sliderArrowRight">
        &#8250;
      </button>
    </section>
  )
}

export default Slider
