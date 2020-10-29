import {createStore} from 'redux'
const reducer = (state={counter:0},action)=>{
    const obj = Object.assign({},state)
    switch (action.type) {
        case 'add':
            obj.counter++
            return obj
            break;
        case 'jian':
          obj.counter--
          return obj;
          break
        default:
            return state
            break;
    }
}
// next需要暴漏一个生成store的一个方法，这样可以根据不用环境判断是否要进行创建store
 const createMyStore = (initialState={counter:0})=>{
const store = createStore(reducer,initialState)
return store
}

export default createMyStore