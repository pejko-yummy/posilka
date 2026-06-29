import { useEffect, useState } from 'react'

export default function PhotoRotator({ images, className = '', children, intervalMs = 5000, style, ...rest }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [images.length, intervalMs])

  return (
    <div
      className={`photo-rotator ${className}`}
      style={{ backgroundImage: `url(${images[index]})`, ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}
