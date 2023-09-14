import { createSlice } from "@reduxjs/toolkit";


const initialState={
    userList:[]
}


export const userManagementSlice=createSlice({
    name:'userManagement',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userList.push(action.payload)
        },
        deleteUser:(state,action)=>{
            const filterUsers=state.userList.filter((user)=>user.name!==action.payload)
            state.userList=filterUsers
        },
        updateUser:(state)=>{
            const filterUsers=state.userList.filter((user)=>prompt(user.name))
            state.userList=filterUsers
        }
    }
})


export const {addUser,deleteUser,updateUser}=userManagementSlice.actions;

export default userManagementSlice.reducer