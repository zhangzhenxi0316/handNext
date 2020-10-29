import { route } from "next/dist/next-server/server/router";
import { withRouter, useRouter } from "next/router";
import Link from 'next/link'
// import styled from 'styled-components'
// import moment from 'moment'
// import dynamic from 'next/dynamic'
import {connect} from 'react-redux'


const A = ({ router,add,jian,counter }) => {
  // console.log(count);

  return (
    <>
    {/* <div>jklhlk</div> */}
      {/* <span>{router.query.id}</span> */}
      <button onClick={add}>加</button>
      <button onClick={jian}>减</button>
  <div>{counter}</div>
      <Link href="/">tianzhuan</Link>
    </>
  );
};


const mapStateToProps =(state)=>{
  // console.log(state,'ssss')
return {
  counter:state.counter
}
} 
const mapDispatch = (dispatch)=>{
  return {
    add(){
      dispatch({type:'add'})
    },
    jian(){
      dispatch({type:'jian'})
    }
  }
}
export default connect(mapStateToProps,mapDispatch)(withRouter(A));
