import App,{Container} from 'next/app'
import 'antd/dist/antd.css'
// import MyContext from '../lib/my-context'
// 集成redux
import {Provider} from 'react-redux'
import store from 'redux'
import Hoc from '../lib/with-rudex'
class MyApp extends App {
//    所有组件都要调用所以在这里提供store

render(){
    const {Component, pageProps, ReduxStore} = this.props
    console.log('props===>',this.props)
    return (
        <Provider store={ReduxStore}>
            <Component {...pageProps}/>
        </Provider>
    )
}
}
MyApp.getInitialProps = async(ctx)=>{
    const appProps = await App.getInitialProps(ctx)
    const store = ctx.ReduxStore;
    // console.log(1111111)
    console.log('ctx',ctx.Component)
    console.log('store',store)
    return {
        ...appProps
    } 
}

export default Hoc(MyApp)
