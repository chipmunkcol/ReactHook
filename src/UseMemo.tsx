import {useState, useEffect, useMemo} from 'react'

const longFn = (num: number) => { // 요 오래걸리는 놈을 useMemo 처리해서 shortFn 값만 변경 될 때는 값을 초기화 시키지 말자
    for(let i=0; i<1000000000; i++) {}
    console.log('오래걸리는 함수')
    return num + 10000;
}

const shortFn = (num: number) => {
    console.log('쉬운 함수')
    return num + 1;
}

const UseMemo = () => {

    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)   
    
    const memoPlusNum = useMemo(()=>{ // 오래걸리는 요놈은 의존성 배열 number값이 변하기 전까진 값 초기화가 안됨!
        return longFn(number); // return 값을 잊지말자!
    },[number]) 
    
    const plusNum2 = shortFn(number2)
    
    return(
        <>
        <h1>useMemo 컴포넌트입니다</h1>
        <input 
        type="number"
        value={number}
        onChange={(e)=> setNumber(e.target.valueAsNumber)}
        />
        <span>+ 10000 = {memoPlusNum} 입니당</span>

        <div>
            <input 
            type="number"
            value={number2}
            onChange={(e)=> setNumber2(e.target.valueAsNumber)}
            />
            <span>+ 1 = {plusNum2} 예요</span>
        </div>

        <hr/>
        
        </>
    )
}

export default UseMemo;