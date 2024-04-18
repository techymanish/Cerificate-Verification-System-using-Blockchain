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

                const contractAddress = '0x36eA6A550DfD3aCcbb13DDaD6a3Ff1602d5275CA';
                const contract = new web3.eth.Contract(ContractABI, contractAddress);

                // Check if the certificate ID already exists on the blockchain
                const certificateIdExists = await contract.methods.certificateExists(formData.certificateId).call();

                if (certificateIdExists) {
                    console.log('Certificate ID already exists on the blockchain. Aborting operation.');
                } else {
                    const formDataJson = JSON.stringify(formData);

                    const options = {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            pinataContent: formDataJson,
                            pinataMetadata: { name: `${formData.personName}_${formData.certificateId}.json` },
                            pinataOptions: { cidVersion: 1 }
                        })
                    };

                    try {
                        const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options);
                        const responseData = await response.json();
                        const ipfsHash = responseData.IpfsHash;

                        await contract.methods
                            .addCertificate(formData.certificateId, ipfsHash)
                            .send({ from: accounts[0] });

                        console.log('Certificate data stored on IPFS with hash:', ipfsHash);
                        console.log('IPFS hash stored on blockchain for certificate ID:', formData.certificateId);
                    } 
                    catch (error) {
                        console.error('Error:', error);
                    }
                }

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
