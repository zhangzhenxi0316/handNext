import React ,{useState,useEffect,useReducer,useContext,memo,useMemo} from 'react'
import MyContext from '../lib/my-context'
function ReducerCount(state=0,action){
    switch(action.type){
        case 'add':
            return state+1
        case 'jian':
            return state-1
        default:return state 
    }
}
export default function MyComp(){
    const Context = useContext(MyContext)
// const [count,setCount] = useState(0)
const [count,dispatchState] = useReducer(ReducerCount,10)
useEffect(()=>{
    const interval = setInterval(()=>{
        dispatchState({type:'add'})
    },1000)
    return ()=>clearInterval(interval)
},[])
return <h1>{count}{Context}</h1>
}