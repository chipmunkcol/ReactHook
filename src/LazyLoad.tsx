import * as React from "react";
import load이미지 from "./image/noImage.jpg"

function LazyLoad () {

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

    return(
        <img 
        ref={imgRef} 
        src={loading ? "https://t1.daumcdn.net/cfile/tistory/996333405A8280FC23" : load이미지}
        style={{width:'40vw', height:'50vh'}}
        />
    )
}

export default LazyLoad;