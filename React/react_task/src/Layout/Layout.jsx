import React from 'react'
import Lheader from './Lheader'
import Lnavbar from './Lnavbar'
import Lhome from './Lhome'
import Lfooter from './Lfooter'


function Layout() {
  return (
    <div>
      <Lheader/>
      <Lnavbar/>
      <Lhome/>
      <Lfooter/>
    </div>
  )
}

export default Layout