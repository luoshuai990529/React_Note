import React,{useContext} from 'react'
import {ColorContext} from '../showArea'

function Color(){
    const {color} = useContext(ColorContext);
    return(
        <>
            <div style={{color}}>
                现在的颜色是蓝色
            </div>
        </>
    )


}

export default Color