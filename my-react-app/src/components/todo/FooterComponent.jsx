import { useContext } from "react";
import { AuthContext } from "./security/AuthContetxt";


function FooterComponent(){
    const authContext = useContext(AuthContext)
   // console.log(`footer component - ${authContext.number}`);

    return(
        <footer className='footer'>
            <div className="container">
                your footer
            </div>
        </footer>
    )
}

export default FooterComponent;