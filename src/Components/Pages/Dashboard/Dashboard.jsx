import React from 'react'
import Sidebar from '../../Layouts/Sidebar'
import Header from '../../Layouts/Header'
import Line from '../../HelperComponents/Chart/Line';
import Radar from '../../HelperComponents/Chart/Radar';
import Linebar from '../../HelperComponents/Chart/Linebar';
import HeaderCard from '../../HelperComponents/HeaderCard'

function Dashboard() {
  return (
    <div className='p-4'>
      <HeaderCard />
      <Line />
      <Radar />
      <Linebar />
    </div>
  )
}

export default Dashboard;