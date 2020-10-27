import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
import { Component } from "react";
// function withLog(Comp){
//     return (props)=>{
//         console.log(props)
//         return <Comp {...props}/>
//     }
// }
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let sheet = new ServerStyleSheet();
    try {
      const originalRenderPage = ctx.renderPage;
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          // enhanceComponent:Component=>withLog(Component)
        });

      let props = await Document.getInitialProps(ctx);
      return {
        ...props,
        styles: (
          <>
            {props.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal(); 
    }
  }
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="test">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
