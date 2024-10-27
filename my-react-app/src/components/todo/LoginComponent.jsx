import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from './security/AuthContetxt';
function LoginComponent(){

    const [username,setUsername] = useState('in28minutes')
    const [password,setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange(e){
        //console.log(e.target.value)
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
       // console.log(e.target.value)
        setPassword(e.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username,password)){
            // authContext.setAuthenticated(true)
            // console.log("success")
            // setShowSuccessMessage(true)
            // setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }else{
            // authContext.setAuthenticated(false)
            // console.log(("failed"))
            //setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }
    // function SuccessMessageComponent() {

    //     if(showSuccessMessage) {
    //         return <div className="successMessage">Authenticated Successfully</div>
    //     }
        
    //     return null   
    // }
    
    // function ErrorMessageComponent() {
    
    //     if(showErrorMessage) {
    //         return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
    //     }
        
    //     return null   
    // }
    return(
        <div className="Login">
            {/* <SuccessMessageComponent/>
            <ErrorMessageComponent/> */}
            {/* {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>} */}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. 
                                                Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="Password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
                
            </div>
        </div>
    )
}

export default LoginComponent;

