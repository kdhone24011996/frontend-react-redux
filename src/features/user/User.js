import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getUserDetails, selectUsers } from "./userSlice"

export const Users = ()=>{
 const dispatch = useDispatch()
 useEffect(()=>{
    dispatch(getAllUsers())
 },[])
 const users = useSelector(state=>state.user.result);
 const userDetails = useSelector(state=>state.user.userDetail?.data)
 const status = useSelector(state=>state.user.status)
 console.log('users',users)
 const numberOfUsersArr = []

 if(users && users.total){
    for(let i=1; i<=users.total; i++){
        numberOfUsersArr.push(i)
    }
 }

 function handleUserClicked(id){
    dispatch(getUserDetails(id))
 }

 console.log(userDetails)
    return(
        <>
        {status === 'loading' && <h1>loading.......</h1>}
        <h2>{userDetails?.first_name}</h2>
      <img src={userDetails?.avatar}/>
        <div>
            {numberOfUsersArr?.map((item)=>{
                return(
                    <button onClick={()=>handleUserClicked(item)} key={item}>{item}</button>
                )
            })}
        </div>
        </>
    )
}