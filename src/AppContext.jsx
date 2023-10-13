import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext =  createContext()
export const AppProvider =({children})=>{
    
    const [currentUser, SetcurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const [loggedin, setloggedin] = useState(currentUser !== null) 
    const navigate = useNavigate()
    const logout = () =>{
       setloggedin(false) 
       sessionStorage.removeItem('user')
       SetcurrentUser(null)
       navigate('/login')
    }
    return <AppContext.Provider value ={{loggedin, setloggedin, logout , currentUser}}>
        {children}
    </AppContext.Provider>
    }
const UseAppContext = ()=>{
    return useContext(AppContext)
}
export default UseAppContext