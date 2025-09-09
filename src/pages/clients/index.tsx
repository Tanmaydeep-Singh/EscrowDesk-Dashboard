import ClientHead from '@/components/Client/ClientHead/ClientHead'
import ClientsTable from '@/components/Client/ClientsTable/ClientsTable'
import React from 'react'

const client = () => {

  return (
    <div className=" p-6 space-y-6">
      
      <ClientHead/>

      <ClientsTable/>


    </div>
  )
}

export default client
