import "./inst.css";
import { useState,useEffect } from "react";

function Certificate(props) {

  const [certificateData, setCertificateData] = useState({
    certificateId: "",
    personName: "",
    issuingAuthority: "",
    certificateTitle: "",
    beginDate: "",
    endDate: "",
    totalMarks: "",
    awardedMarks: "",
    govDocName: "",
    govDocID: "",
    docID: ""
  });
  const data=props;
  useEffect(() => {
    // Assuming props.data contains the JSON data received from the API
    if (props.data) {
      setCertificateData(prevData => ({
        ...prevData,
        ...props.data
      }));
    }
  }, [props.data]);
  
  return (
    <>
      <div className="form-container">
        <h1 className="heading">Verified Certificate✅</h1>
        <form>
          <div>
            <label>Certificate ID</label>
            <div className="myInput">{certificateData.certificateId}</div>
          </div>
          <div>
            <label>Name</label>
            <div className="myInput">{certificateData.personName}</div>
          </div>
          <div>
            <label>Issuing Authority</label>
            <div className="myInput">{certificateData.issuingAuthority}</div>
          </div>
          <div>
            <label>Certificate Title</label>
            <div className="myInput">{certificateData.certificateTitle}</div>
          </div>
          <div>
            <label>Begin Date</label>
            <div className="myInput">{certificateData.beginDate}</div>
          </div>
          <div>
            <label>End Date</label>
            <div className="myInput">{certificateData.endDate}</div>
          </div>
          <div>
            <label>Total Marks</label>
            <div className="myInput">{certificateData.totalMarks}</div>
          </div>
          <div>
            <label>Awarded Marks</label>
            <div className="myInput">{certificateData.awardedMarks}</div>

          </div>
          <div>
            <label>Government ID</label>
            <div className="myInput">{certificateData.govDocName}</div>

          </div>
          <div>
            <label>Document ID</label>
            <div className="myInput">{certificateData.docID}</div>
          </div>
          <div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Certificate;
