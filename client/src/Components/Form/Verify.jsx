import React from 'react'
import { useState } from 'react';
import { ContractABI } from './ContractABI';
import Web3 from 'web3';

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
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        const contractAddress = '0x36eA6A550DfD3aCcbb13DDaD6a3Ff1602d5275CA';
        const contract = new web3.eth.Contract(ContractABI, contractAddress);

        const certificateHash = await contract.methods.getCertificateHashById(formData.certificateId).call();

        const url = `https://gateway.pinata.cloud/ipfs/${certificateHash}`; // Construct URL with the hash
        
        const options = {
          method: 'GET',
        };
        
        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log(responseData);        
        
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
              <label>Certificate ID</label>
              <input type="text" name="certificateId" value={formData.certificateId} onChange={handleChange} />
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