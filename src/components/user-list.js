
import {  useSelector,useDispatch } from 'react-redux'
import { deleteUser } from '@/store/feature/user-management/userManagementSlice'
import { updateUser } from '@/store/feature/user-management/userManagementSlice'
function UserList() {
   
    const {userList}=useSelector((state)=>state.userManagement)
    const dispatch=useDispatch()
    
    
    
  return (
    <div>
      {userList.map((user)=>(
        <h4 key={user.name} style={{marginBottom:'5px'}}>{user.name}
        <button onClick={()=>dispatch(updateUser(user.name))}>update</button>
        <button onClick={()=>dispatch(deleteUser(user.name))}>Delete</button>
        </h4>
      ))}
    </div>
  )
}

export default UserList
