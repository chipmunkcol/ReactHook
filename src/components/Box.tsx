import React, {useEffect} from "react"

interface IBox {
    cssStyle : () => {
        backgroundColor: string;
        width: string;
        height: string;
    }
}
const Box = ({cssStyle}: IBox) => {

    useEffect(()=>{
        console.log('박스 랜더링되고있니?')
    },[cssStyle])
    

    return <div style={cssStyle()}></div>
    
}

export default Box;