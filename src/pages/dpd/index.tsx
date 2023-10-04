import React from 'react'
import Table from './Table'
import Content from '../Content'
import NoNavbar from '../NoNavbar'

const Dpd = () => {
  return (
    <NoNavbar><h1 className='font-bold text-xl text-left p-4'>Daftar DPD AELI di Indonesia</h1>
    <Table></Table>
    </NoNavbar>

  )
}

export default Dpd