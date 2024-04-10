import React, { useState } from 'react';
import Web3 from 'web3';
import { ContractABI } from './ContractABI';
import "../Form/inst.css"

function CertificateForm() {
    const [formData, setFormData] = useState({
        certificateId: '',
        personName: '',
        issuingAuthority: '',
        certificateTitle: '',
        beginDate: '',
        endDate: '',
        totalMarks: '',
        awardedMarks: '',
        govDocName: '',
        govDocID: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);


        try {

            if (window.ethereum) {
                await window.ethereum.enable();
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();

                const contractAddress = '0xb7782dFfE4a451a210E045DCDb939B1235A4A855';
                const contract = new web3.eth.Contract(ContractABI, contractAddress);

                const options = {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        pinataContent: formData,
                        pinataMetadata: { name: 'maneesh.json' },
                        pinataOptions: { cidVersion: 1 }
                    })
                };

                await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options)
                    .then(response => response.json())
                    .then(async response => await contract.methods
                        .addCertificate(formData.certificateId, response.IpfsHash)
                        .send({ from: accounts[0] })).then(response => console.log(response))


            } else {
                throw new Error('MetaMask extension not detected');
            }
        } catch (error) {
            console.error('Error adding certificate:', error);
        }

        console.log(formData);
    };

    return (
        <>
            <div className="form-container"> {/* Using a class name for styling */}
                <h1 className='heading'>Issue a Certificate</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Certificate ID</label>
                        <input type="number" name="certificateId" value={formData.certificateId} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="personName" value={formData.studentName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Issuing Authority</label>
                        <input type="text" name="issuingAuthority" value={formData.issuingAuthority} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Certificate Title</label>
                        <input type="text" name="certificateTitle" value={formData.certificateTitle} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Begin Date</label>
                        <input type="date" name="beginDate" value={formData.beginDate} onChange={handleChange} />
                    </div>
                    <div>
                        <label>End Date</label>
                        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Total Marks</label>
                        <input type="number" name="totalMarks" value={formData.totalMarks} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Awarded Marks</label>
                        <input type="number" name="awardedMarks" value={formData.awardedMarks} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Government ID</label>
                        <input type="text" name="govDocName" value={formData.govDocName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Document ID</label>
                        <input type="text" name="docID" value={formData.docID} onChange={handleChange} />
                    </div>
                    <div>
                    <button className='primary' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CertificateForm;
