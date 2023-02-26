 
import React from 'react'  
import Overview1 from '@/components/about/Overview1'
import Overview3 from '@/components/about/Overview3'
import Overview2 from '@/components/about/Overview2'
import Overview4 from '@/components/about/Overview4'
import Achivements from '@/components/about/Achivements'
import NewsPress from '@/components/about/NewsPress'
import ClientCompany from '@/components/about/ClientCompany'
import RouteNavSlider from '@/components/common/RouteNavSlider'
import HeroBanner from '@/components/common/Banner'
// import { useRouter } from 'next/router'
 
function about() {
  // const router=useRouter()
  // console.log(router.pathname)
 
  return (
    <>
    {/* <RouteNavSlider router='About Us'   /> */}
    <HeroBanner name='About Us' />
    <Overview1/>
    <Overview2/>
    <Overview3/>
    <Overview4/>
    <Achivements/> 
    <NewsPress/> 
    <ClientCompany/> 
    </>
  )
}

export default about