import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import axios from 'axios'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

interface UserItemPageParams {
    userID: string
}

export const UserItemPage:FC = () => {

    const [user, setUser] = useState<IUser | null>()

    const nav = useNavigate();

    const id = useParams<Partial<UserItemPageParams>>().userID;

    useEffect( () => {
      fetchUser()
    }, [])

    
    async function fetchUser() {
      try{
        const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/"+ id)
        setUser(response.data)
      } catch(e){
        alert(e)
      }
    }


  return (
    <div>
        <button className='' onClick={() => nav("/users")}>Back</button>
        <h1>Page of the user: {user?.name}</h1>
        <div>Email : {user?.email}</div>
        <div>Address : {user?.address.city}, {user?.address.street}, {user?.address.zipcode},</div>
    </div>
  )
}
