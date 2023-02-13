 
import React from 'react' 
 
import Overview1 from '@/components/about/Overview1'
import Overview3 from '@/components/about/Overview3'
import Overview2 from '@/components/about/Overview2'
import Overview4 from '@/components/about/Overview4'
import Achivements from '@/components/about/Achivements'
import NewsPress from '@/components/about/NewsPress'
 
function about() {
  return (
    <><Overview1/>
    <Overview2/>
    <Overview3/>
    <Overview4/>
     <Achivements/> 
     <NewsPress/> 
    </>
  )
}

export default about