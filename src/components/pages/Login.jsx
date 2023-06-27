import { useNavigate } from "react-router-dom";
import Header from "../auth/Header";
import Login from "../auth/Login";
import { useEffect } from "react";

export default function LoginPage(){
    const token = localStorage.getItem('token');
    const navigate = useNavigate(); 
  
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
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />  
                <Login/>
                </div>
        </div>
        </>
    )
}