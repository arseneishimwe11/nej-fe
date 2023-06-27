import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup({onClose}){

  const navigate = useNavigate();
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{
    axios.post('http://localhost:5000/laptops',
    {...signupState}
    )
    .then((response)=> {
    // localStorage.setItem('token',response.data.token);
    // navigate("/dashboard")
    window.location.reload();
    })
    .catch(error => {
      console.log(error);
    })
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <button
          className="ml-[32rem] px-4 py-2 bg-red-700 text-white rounded-md"
           onClick={onClose}
          >
          Close
        </button>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Save" />
        </div>

      

      </form>
    )
}