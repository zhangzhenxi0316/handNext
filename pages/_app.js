import App,{Container} from 'next/app'
import 'antd/dist/antd.css'
import MyContext from '../lib/my-context'
class MyApp extends App {
    static async getInitialProps({Component,ctx}){
        let pageProps;
       if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)
       }
        console.log(1111111)
        return{
                pageProps
        }
    }
    render(){
        const {Component,pageProps} = this.props
        // console.log(111,pageProps)
        return(
            // <Container>
            <MyContext.Provider value="test">
                    <Component ></Component>
            </MyContext.Provider>
            // </Container>
        )
    }
}

// function MyApp({ Component, pageProps }) {
//     return <Component  {...pageProps}/>
//   }
  
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
export default MyApp
