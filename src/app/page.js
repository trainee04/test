'use client'

import { useState } from "react"
import UserList from '@/components/user-list'
import {useDispatch} from 'react-redux'
import { addUser } from "@/store/feature/user-management/userManagementSlice"

export default function Home() {
  const [name,setName]=useState([])
  const dispatch=useDispatch()

  const addUserFun=()=>{
    dispatch(addUser({name}))
    setName('')
    
    
    localStorage.setItem('name',[name])
  }

  return (
    <main style={{padding:'20px'}}>
      Name : <input 
      value={name}
      placeholder="Type here"
      onChange={(e)=>setName(e.target.value)}
      required
      />
      <button onClick={addUserFun}>Add User</button>
      <UserList/>
    </main>
  )
}
