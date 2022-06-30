import React, {useEffect, useState} from 'react'
import userSvg from '../images/userSvg.svg'

function Useri() {
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        async function fetchUsers() {
          const response =  await fetch('https://jsonplaceholder.typicode.com/users')
          const users = await response.json()
          return users
        }
           fetchUsers().then(users => {
              setUsersData(users)
          })       
        },[])

        const allUsers = usersData.map(i => {
            return (
                <div className='bg-regal-blue p-12 w-5/6 md:w-5/6 rounded-2xl border-4 border-white flex flex-col items-center justify-center text-white font-raleway lg:hover:scale-x-105' key={i.id}>
                    <img src={userSvg} />
                    <h4 className='font-bold text-xl'>{i.name}</h4>
                    <p className='text-sm'>a.k.a. {i.username}</p>
                    <p className='text-xs'>{i.email}</p>
                </div>
            )
        })
        const fourUsers = allUsers.slice(0,4)
    return (
    <div className='mx-auto h-screen flex items-center justify-center bg-bg-blob-circle bg-center bg-cover bg-no-repeat xl:mt-40 md:-mt-20 -mt-30'>
        <div className='grid gap-6 lg:grid-cols-4 lg:grid-rows-1 justify-items-center grid-cols-2'>
            {fourUsers}
        </div>
    </div>
  )
}

export default Useri