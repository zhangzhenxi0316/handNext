 import {withRouter} from 'next/router'
 const B =  ({router,ID})=>{
    console.log(router.query.name,router)
return(<div>
    <div>asdfasdfasdfasdfasdfasdf</div>
    <span>{router.query.name}</span>
</div>)
}
// B.getInitialProps = async ({ req, query }) => {
//     return {
//       name: query.name,
//       ID:1
//     };
//   };
export default withRouter(B)