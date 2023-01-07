import axios from "axios";

// A mock function to mimic making an async request for data
export async function fetchUsers() {
 return await axios.get('https://reqres.in/api/users')
}

export async function fetchUserDetails(id){
  return await axios.get(`https://reqres.in/api/users/${id}`)
}
