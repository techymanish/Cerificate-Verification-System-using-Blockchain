import React from "react";
import "./inst.css";
import { useState } from "react";

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
    govDocID: ""
  });

  useEffect(() => {
    if (data) {
      // Map the data to state
      setCertificateData({
        certificateId: data.certificateId || "",
        personName: data.personName || "",
        issuingAuthority: data.issuingAuthority || "",
        certificateTitle: data.certificateTitle || "",
        beginDate: data.beginDate || "",
        endDate: data.endDate || "",
        totalMarks: data.totalMarks || "",
        awardedMarks: data.awardedMarks || "",
        govDocName: data.govDocName || "",
        govDocID: data.govDocID || ""
      });
    }
  }, [data]);

  return (
    <>
      <div className="form-container">
        <h1 className="heading">Verified Certificate</h1>
        <form>
          <div>
            <label>Certificate ID</label>
            <input
              className="myInput"
              readOnly
              type="number"
              name="certificateId"
              value={certificateData.certificateId}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              className="myInput"
              readOnly
              type="text"
              name="personName"
              value={certificateData.personName}
            />
          </div>
          <div>
            <label>Issuing Authority</label>
            <input
              className="myInput"
              readOnly
              type="text"
              name="issuingAuthority"
              value={certificateData.issuingAuthority}
            />
          </div>
          <div>
            <label>Certificate Title</label>
            <input
              className="myInput"
              readOnly
              type="text"
              name="certificateTitle"
              value={certificateData.certificateTitle}
            />
          </div>
          <div>
            <label>Begin Date</label>
            <input
              className="myInput"
              readOnly
              type="date"
              name="beginDate"
              value={certificateData.beginDate}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              className="myInput"
              type="date"
              name="endDate"
              value={certificateData.endDate}
              readOnly
            />
          </div>
          <div>
            <label>Total Marks</label>
            <input
              className="myInput"
              readOnly
              type="number"
              name="totalMarks"
              value={certificateData.totalMarks}
            />
          </div>
          <div>
            <label>Awarded Marks</label>
            <input
              className="myInput"
              readOnly
              type="number"
              name="awardedMarks"
              value={certificateData.awardedMarks}
            />
          </div>
          <div>
            <label>Government ID</label>
            <input
              className="myInput"
              readOnly
              type="text"
              name="govDocName"
              value={certificateData.govDocName}
            />
          </div>
          <div>
            <label>Document ID</label>
            <input
              className="myInput"
              type="text"
              name="docID"
              value={certificateData.docID}
              readOnly
            />
          </div>
          <div>
            <button className="primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Certificate;
