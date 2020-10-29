import createMyStore from './store'
import React from 'react'
function getOrCreateStore(initialState){
    const isServer = typeof window === 'undefined'
    const __NEXT_REDUX_STORE = '__NEXT_REDUX_STORE' //定义个变量用来查看客户端是否存在store
    if(isServer){
        // 服务端
        // 返回新的store
        return createMyStore(initialState)
    }
    console.log('__NEXT_REDUX_STORE',window[__NEXT_REDUX_STORE])
    if(!window[__NEXT_REDUX_STORE]){
        // 是客户端客户端没有store create
        return createMyStore(initialState)
    }
    return window[__NEXT_REDUX_STORE]
}
const Hoc = (Comp)=>{
    // 高阶组件，让每个app都经历高阶组件进行处理集成redux
    class HocReducerComp extends React.Component{
        constructor(props){
            super(props)
            
            this.ReduxStore = getOrCreateStore(props.initialState)
        }
        static async getInitialProps(ctx){
            let appProps = {}
            if(typeof Comp.getInitialProps === 'function'){
                // 组件有getInitialProps函数
                appProps = await Comp.getInitialProps(ctx) 
            }
            const MyStore = getOrCreateStore({ counter: 0 });
            // console.log('MyStore',MyStore.getState()) 
            // console.log(11111)
            //利用ctx将store传进app初始化
            ctx.ReduxStore = MyStore  
            // console.log('MyStore',MyStore.getState())
            return {
                ...appProps,
                initialState:MyStore.getState()
            }
        }
        render(){
            return (
                <Comp
                {...this.props}
                ReduxStore = {this.ReduxStore}
                />
            )
        }
    }
    return HocReducerComp
}
export default Hoc;