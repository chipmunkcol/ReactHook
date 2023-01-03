import {useState, useMemo, useCallback} from "react"
import Box from "./components/Box";


function UseCallback(){

    const [size, setSize] = useState(100)
    
    console.log('size: ', size);
    
    // const cssStyle = useMemo(()=>{   변수형은 memo
    //     return{
    //     backgroundColor:'tomato',
    //     width: `${size}px`,
    //     height: `${size}px`}
    // },[size])

    const cssStyle = useCallback(() => { // 함수형은 useCallback 으로 memoization 하자
        return  {
        backgroundColor:'tomato',
        width: `${size}px`,
        height: `${size}px`
        }
    },[size])

    

    const [dark, setDark] = useState(false)
    
    return(
        <>
        <h1>useCallback 컴포넌트입니다</h1>

        <input 
        type="number"
        onChange={(e)=>setSize(parseInt(e.target.value))}
        />
        <span>size 변경 박스!</span>
        
        <div style={{backgroundColor: dark ? "black" : "white"}}>
            <Box cssStyle={cssStyle}/>
            <button onClick={()=>setDark(prev=>!prev)}>{dark.toString()}</button>
        </div>
        
        </>
    )
}

export default UseCallback;