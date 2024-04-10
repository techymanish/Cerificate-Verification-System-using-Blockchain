import React from 'react'
import { useState } from 'react';
import "../Form/inst.css"

function Verify() {
 
    const [formData, setFormData] = useState({
        name: '',
        certificateId: '',  
      });
    
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here, like sending data to a server




        console.log(formData);
      };
    
      return (
        <>
          <div className="form-container"> {/* Using a class name for styling */}
          <h1 className='heading'>Verify a Certificate</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              
              <label>IPFS Hash</label>
              <input type="text" name="certificate" value={formData.certificateId} onChange={handleChange} />
            </div>
            <div>
            <button className='primary' type="submit">Submit</button>
            </div>
          </form>
        </div>
        </>
      )
}

export default Verify