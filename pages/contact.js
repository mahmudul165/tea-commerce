 
import React from 'react' 
import ContactUs from '@/components/contact/ContactUs'
import OurOffices from '@/components/home/our-offices/OurOffices'
import RouteNavSlider from '@/components/common/RouteNavSlider'
function contact() {
  return (
    <> <RouteNavSlider router='Contact Us'/>
      <ContactUs/>
      <OurOffices/>
      </>
  )
}

export default contact