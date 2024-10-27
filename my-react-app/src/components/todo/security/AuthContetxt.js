import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    //const [number,setNumber] = useState(10)

    const [isAuthenticated,setAuthenticated] = useState(false)

    const [username,setUsername] = useState(null)

    const [token,setToken] = useState(null)

    //setInterval( () => setNumber(number+1),10000)
   // const valueToBeShared = {number, isAuthenticated, setAuthenticated }
    

   //harcoded authentication
//    function login(username,password){
//     if(username==='in28minutes' && password==='dummy'){
//         setAuthenticated(true)
//         setUsername(username)
//         return true
//        // console.log("success")
//         // setShowSuccessMessage(true)
//         // setShowErrorMessage(false)
//         // navigate(`/welcome/${username}`)
//     }else{
//         setAuthenticated(false)
//         setUsername(null)
//         return false
//         // console.log(("failed"))
//         // setShowSuccessMessage(false)
//         // setShowErrorMessage(true)
//         }
//     }

//========================basicauth===============
    
    // async function login(username,password){

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password)


    //     try{

    //     const response =  await executeBasicAuthenticationService(baToken)  // waits for the respose
        
    //     if(response.status==200){ // successfull response
    //         setAuthenticated(true)
    //         setUsername(username)
    //         setToken(baToken)

    //         apiClient.interceptors.request.use(
    //             (config) => {
    //                 console.log("intercepting and adding token")
    //                 config.headers.Authorization = baToken
    //                 return config
    //             }
    //         )
    //         return true
          
    //     }else{
    //         // setAuthenticated(false)
    //         // setUsername(null)
    //         // setToken(null)
    //         logout()
    //         return false
            
    //         }
    //     }catch(error){
    //         logout()
    //         return false
    //     }
    // }
    
    

    async function login(username,password){

        try{

        const response =  await executeJwtAuthenticationService(username,password)  // waits for the respose
        
        if(response.status==200){ // successfull response

            const jwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setUsername(username)
            setToken(jwtToken)

            apiClient.interceptors.request.use(
                (config) => {
                    console.log("intercepting and adding token")
                    config.headers.Authorization = jwtToken
                    return config
                }
            )
            return true
          
        }else{
            // setAuthenticated(false)
            // setUsername(null)
            // setToken(null)
            logout()
            return false
            
            }
        }catch(error){
            logout()
            return false
        }
    }


    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }
   return(
        <AuthContext.Provider value={ { isAuthenticated, setAuthenticated,login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
    )

}