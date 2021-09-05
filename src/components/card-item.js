import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


// import {DEC_COUNTER,INC_COUNTER} from '../redux/action-types'
import { decCounter,incCounter} from '../redux/action-creators'




export  const CardItem=()=> {

const counter=useSelector(({counter:{counter}})=>counter)
console.log(counter)
const dispatch=useDispatch()


    const handDec=()=>{dispatch(decCounter)}
    const handInc=()=>{dispatch(incCounter)}
    return (
        <div>
        <h1>{counter}</h1>
            <button onClick={handInc}>inc</button>
            <button onClick={handDec}>dec</button>
        </div>
    )
}
