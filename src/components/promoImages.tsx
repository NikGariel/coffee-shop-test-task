import config from '@/config.ts'
import { useEffect, useState } from 'react'

const promoImages = () => {
  const { promo_images } = config
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % promo_images.length)
    }, 5000)

    // Clear the interval on component unmount
    return () => clearInterval(interval)
  }, [promo_images.length])

  return (
    <>
      {promo_images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Promo ${i}`}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            i === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
}

export default promoImages
