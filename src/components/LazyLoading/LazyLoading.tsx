import { useRef, useEffect, useState } from 'react';
import type{ImgHTMLAttributes} from 'react';
import css from './styles.module.css';
import { type } from 'os';

type LazyImageProps = { src: string }
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

export const LazyLoading = ({ src,...imgProps }: Props): React.JSX.Element => {
  const node = useRef<HTMLImageElement>(null)

  const [currentSrc, setCurrentSrc] = useState(
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    //Nuevo observador  web API
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })
    //OnIntersection ==> console.log
    if (node.current) {
      observer.observe(node.current)
    }
    //desconectar
    return () => {
      observer.disconnect()
    }
    
  }, [src]);


  return <img
    ref={node}
    className={css.img}
    src={currentSrc}
    {...imgProps}
  />
  
}





