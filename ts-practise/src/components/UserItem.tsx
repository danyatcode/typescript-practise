import React, { FC } from 'react'
import { IUser } from '../types/types'
import { Link } from 'react-router-dom'

interface UserItemProps{
    user: IUser
}


export const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <Link to={`/user/${user.id}`} style={{padding: 15, border: '1px solid grey'}}>
            {user.id} {user.name} 
    </Link>
  )
}
