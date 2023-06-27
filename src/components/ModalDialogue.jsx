import React, { useState } from 'react';
import Signup from './auth/Signup';

function ModalDialog({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  const [formData, setFormData] = useState({
    chassisNumber: '',
    company: '',
    price: '',
    plateNumber: '',
    model: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="fixed inset-0 mx-auto flex items-center justify-center bg-gray-100 z-50 w-[40%] h-[75%] my-auto">
        {/* {children} */}

        <div className=" bg-white w-[55%] h-[90%] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">        
          <div className="max-w-md w-full space-y-8">
    
            <Signup onClose={onClose}/>
          
            </div>
            </div>    
    
    </div>
  );
}

export default ModalDialog;
