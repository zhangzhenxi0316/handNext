import App,{Container} from 'next/app'
import 'antd/dist/antd.css'
class MyApp extends App {
    // static async getInitialProps({Component,ctx}){
        // const pageProps = await Component.getInitialProps(ctx)
        // console.log(pageProps)
        // return{}
        //         pageProps
        // }
    // }
    render(){
        const {Component,pageProps} = this.props
        // console.log(111,pageProps)
        return(
            // <Container>
                    <Component ></Component>
            // </Container>
        )
    }
}

// function MyApp({ Component, pageProps }) {
//     return <Component  />
//   }
  
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
export default MyApp
