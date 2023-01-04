import * as React from "react";
import load이미지 from "./image/noImage.jpg"

interface ILazyLoad {
    src: string;
}
function LazyLoad ({src}: ILazyLoad) {

const [loading, setLoading] = React.useState(false)
const imgRef = React.useRef(null)
const observerRef = React.useRef<IntersectionObserver>();

React.useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // 인스턴스 생성
    imgRef.current && observerRef.current.observe(imgRef.current); // 이미지태그 관찰 시작
}, [])

// IntersectionObserver 설정
const intersectionObserver = (entries: IntersectionObserverEntry[], end: IntersectionObserver) => {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) { // 관찰되고 있는 entry가 보여지게 되면
            end.unobserve(entry.target); // 관찰 종료
            setLoading(true); 
        }
    })
}

function getPosterImg(poster_path: string, size?: string ) {
    return `https://image.tmdb.org/t/p/${size?size:"original"}${poster_path}`
}

    return(
        <img 
        ref={imgRef} 
        src={loading ? getPosterImg(src) : load이미지}
        style={{width:'80vw', height:'50vh'}}
        />
    )
}

export default LazyLoad;