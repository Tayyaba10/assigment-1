import React from 'react'

export default function header() {
  return (
    <div className='bg-red-400 py-6 mt-10'>
      <ul className='flex items-center justify-end space-x-10 mr-10 text-2xl hover:underline font-bold'>
        <a href='/'>Home</a>
        <a href='/countries'>Countries</a>
      </ul>
    </div>
  )
}
