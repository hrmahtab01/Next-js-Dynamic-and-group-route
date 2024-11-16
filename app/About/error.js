'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-semibold font-sans text-red-500 text-center'>Something went wrong! </h2>
      <button className='py-2 px-3 bg-teal-500 rounded-md text-lg font-semibold fit w-[300px] mt-2'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
