import React from 'react'

export default function page({params}) {
  return (
    <div className='text-4xl font-semibold text-red-500 font-sans text-center mt-3'>
    this is dynamic route {params.Dynamic}
    </div>
  )
}
