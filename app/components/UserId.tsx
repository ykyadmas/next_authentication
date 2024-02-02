"use client"
import { User } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const UserId = () => {
  const [users, setUsers] =useState<User[]>([])
  
  useEffect(() =>{
    const fetchData = async () => {
      const {data} = await axios.get<User[]>('/api/users');
      setUsers(data)
    }
    fetchData()
  })
  return (
    <div>
      {
        users.map((user) => (
          <div key={user.id}>{user.id}</div>
          
        ))
      }
    </div>
  )
}

export default UserId