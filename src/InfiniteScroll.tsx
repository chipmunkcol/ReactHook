import { useInView } from "react-intersection-observer";
import * as React from 'react'
import { Idata, Iresults } from "./type/type";
import LazyLoad from "./LazyLoad";

const API_KEY = "a96ecb105f0214953ccc67ed2055f725"
const BASE_URL = "https://api.themoviedb.org/3"


function InfiniteScroll(){  // 무한스크롤 & lazyLoad

const [ref, inView] = useInView()

const [items, setItems] = React.useState<Iresults[]>([])
// console.log('items: ', items);

const [page, setPage] = React.useState(1)
console.log('page: ', page);
const [loading, setLoading] = React.useState(false)
const [search, setSearch] = React.useState('a')

const getItems = React.useCallback(async() => {
    setLoading(true)
    
    const data = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${search}&page=${page}`).then((res)=> res.json())
    setItems(prev => [...prev, ...data.results])
    
    setTimeout(() => { // 잘은 모르겠는데 settime 안주면 lading false가 바로돼서 page가 2개씩 넘어감
        setLoading(false)
    }, 1000);
}, [page])

React.useEffect(()=>{
    getItems()
},[getItems])

React.useEffect(()=>{
    if(inView && !loading) { // 사용자가 마지막을 보고있고 & 로딩중이 아니면 다음페이지!
        setPage(prev => prev + 1)
    }
},[inView, loading])


    return(
        <>
        
        {items.map((item, i) => (
            <React.Fragment key={i}>
                {items.length -1 === i ? (
                    <div ref={ref}>
                        <LazyLoad src={item.backdrop_path}/>
                    </div>
                ) : (
                    <LazyLoad src={item.backdrop_path}/>)
                }
            </React.Fragment>
        ))}

        </>
    
    )
}

export default InfiniteScroll;