import {Button} from 'antd'
import Link from 'next/link'
import Router from 'next/router'  //Router.push()
export default ()=>{
    function handleLink(){
        Router.push({
            pathname:'/a',
            query:{
                id:'zzx'
            }
        },'/a/zzx')
    }
    return(
        <>
        <Link href="/a?id=1" as="/a/1">跳转</Link>
        <span onClick={handleLink}>跳转</span>
        </>
    )
}