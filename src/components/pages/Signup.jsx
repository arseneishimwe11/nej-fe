import { useEffect } from "react";
import Header from "../auth/Header";
import Signup from "../auth/Signup";
import { redirect, useNavigate } from 'react-router-dom';
  
export default function SignupPage(){
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); 
    // localStorage.removeItem('token');
  useEffect(()=>{
    if(token){
        navigate("/");
    }
  },[token,navigate])
    return(
        <>
         <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
         
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            {/* <Signup onClose={onClose}/> */}
            <Signup/>
            </div>
            </div>
        </>
    )
}