import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContetxt'


function WelcomeComponent(){
    const {username} = useParams()
    //console.log(username)

    const [message, setMessage] = useState(null)
    const authContext = useAuth()

    function callHelloWorldRestApi(){
        console.log("called")
        
        // axios.get('http://localhost:8080/hello-world')
        //     .then((response) => successfullResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('cleanup'))

        // retrieveHelloWorldBean()
        //     .then((response) => successfullResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('cleanup'))

        retrieveHelloWorldPathVariable('Naresh',authContext.token)
            .then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))

    }

    function successfullResponse(response){
        console.log(response)
       //setMessage(response.data)

        setMessage(response.data.message)
    }
    function errorResponse(error){
        console.log(error)        
    }
    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                {/* your todos - <a href='/todos'>go here</a> */}
                your todos - <Link to ='/todos'>go here</Link> 
                {/*  link - used to refresh only specific page */}
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello</button>
            </div>
            <div className="text-info">
                {message}
            </div>
        </div>
    )
}

export default WelcomeComponent