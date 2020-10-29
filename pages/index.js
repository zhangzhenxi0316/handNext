import {Button} from 'antd'
import Link from 'next/link'
import Router from 'next/router'  //Router.push()
export default ()=>{
    
    return(
        <>
        <Link href="/a?id=1" as="/a/1">跳转</Link>
        {/* <Link href="/test" >test</Link> */}
        {/* <span onClick={handleLink}>跳转</span> */}
        </>
    )
}