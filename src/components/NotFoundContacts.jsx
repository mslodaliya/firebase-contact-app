import React from 'react'

function NotFoundContacts() {
  return (
    <div className='flex h-[80vh] items-center justify-center gap-4'>
        <div>
        <img src="/contact.png"/>
        </div>
        <h3 className='text-white text-2xl font-semibold'>Contact Not Found</h3>
    </div>
  )
}

export default NotFoundContacts