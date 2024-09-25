import React from 'react'
import Messagecard from './Messagecard'

const directorsData = [
  {
    image: '/path/to/director1.jpg',
    name: 'Name',
    designation: 'CEO',
    message: 'Welcome to our company. We are committed to excellence.'
  },
  {
    image: '/path/to/director3.jpg',
    name: 'Name',
    designation: 'CFO',
    message: 'We are dedicated to financial integrity and growth.'
  },
  {
    image: '/path/to/director2.jpg',
    name: 'Name',
    designation: 'CTO',
    message: 'Innovation drives us forward. Let’s build the future together.'
  },
  
  {
    image: '/path/to/director4.jpg',
    name: 'Name',
    designation: 'COO',
    message: 'Operational excellence is our top priority. Thank you for your support.'
  }
]

const Directorsmessage = () => {
  return (
    <div className='w-full h-auto px-20 pb-20 flex flex-wrap justify-center gap-5'>
      {directorsData.map((director, index) => (
        <Messagecard
          key={index}
          image={director.image}
          message={director.message}
          name={director.name}
          designation={director.designation}
          
        />
      ))}
    </div>
  )
}

export default Directorsmessage
