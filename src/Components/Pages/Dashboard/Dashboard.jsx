import React from 'react'
import Sidebar from '../../Layouts/Sidebar'
import Header from '../../Layouts/Header'
import Table from '../../../Table'

function Dashboard() {
  return (
    <div className="main d-flex flex-column ">
        <aside className="d-flex w-100">

          <Sidebar/>

          <div className="d-flex w-100 flex-column">
            <Header/>
            <div>
              <Table />
            </div>
            
          </div>
        </aside>
      </div> 
  )
}

export default Dashboard;