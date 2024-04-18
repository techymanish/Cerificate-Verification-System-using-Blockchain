import React from "react";
import "./inst.css";
import { useState } from "react";
function Certificate(data) {
  const [formData, setFormData] = useState({
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
  });

  return (
    <>
      <div className="form-container">
        {" "}
        {/* Using a class name for styling */}
        <h1 className="heading">Issue a Certificate</h1>
        <form>
          <div>
            <label>Certificate ID</label>
            <input
              type="number"
              name="certificateId"
              value={formData.certificateId}
            />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="personName" value={formData.studentName} />
          </div>
          <div>
            <label>Issuing Authority</label>
            <input
              type="text"
              name="issuingAuthority"
              value={formData.issuingAuthority}
            />
          </div>
          <div>
            <label>Certificate Title</label>
            <input
              type="text"
              name="certificateTitle"
              value={formData.certificateTitle}
            />
          </div>
          <div>
            <label>Begin Date</label>
            <input type="date" name="beginDate" value={formData.beginDate} />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" name="endDate" value={formData.endDate} />
          </div>
          <div>
            <label>Total Marks</label>
            <input
              type="number"
              name="totalMarks"
              value={formData.totalMarks}
            />
          </div>
          <div>
            <label>Awarded Marks</label>
            <input
              type="number"
              name="awardedMarks"
              value={formData.awardedMarks}
            />
          </div>
          <div>
            <label>Government ID</label>
            <input type="text" name="govDocName" value={formData.govDocName} />
          </div>
          <div>
            <label>Document ID</label>
            <input type="text" name="docID" value={formData.docID} />
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
