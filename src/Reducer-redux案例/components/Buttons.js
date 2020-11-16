import React,{useContext} from 'react'
import {ColorContext,UPDATE_COLOR} from '../showArea'


function Buttons(){
    const {dispatch} = useContext(ColorContext)
    return(
        <>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:"#0094ff"})}>蓝色</button>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:"hotpink"})}>粉色</button>
        </>
    )


}

export default Buttons