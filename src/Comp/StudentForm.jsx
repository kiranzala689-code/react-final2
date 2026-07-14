import axios from "axios";
import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    subject: "",
    marks: "",
    examType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5003/students", formData);

    alert("Data Added Successfully");

    setFormData({
      studentName: "",
      subject: "",
      marks: "",
      examType: "",
    });
  };

  return (
   <div className="container-fluid bg-light border-0  mt-2">
  <div className=" p-4">
    <form onSubmit={handleSubmit}>
        
      <div className="row align-items-end  border-0">
     
        <div className="col-md-3 ">
            
          <label className="form-label">Student Name</label>
          <input
          
            type="text"
            className="form-control rounded-pill"
            placeholder="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-2 border border-0">
          <label className="form-label">Subject</label>
          <select
            className="form-select rounded-pill"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select Subject</option>
            <option value="javascript">javascript</option>
            <option value="react js">react js</option>
            <option value="html">html</option>
            <option value="node js">node js</option>
            <option value="bootstrap">bootstrap </option>
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Marks</label>
          <input
            type="number"
            className="form-control rounded-pill" 
            placeholder="Marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Exam Type</label>
          <select
            className="form-select rounded-pill"
            name="examType"
            value={formData.examType}
            onChange={handleChange}
          >
            <option value="">Select Exam Type</option>
            <option value="Online Exam">Online Exam</option>
            <option value="Offline Exam">Offline Exam</option>
            <option value="Mixed Exam">missed Exam</option>
          </select>
        </div>

        <div className="col-md-2">
          <button type="submit" className="btn btn-primary rounded-pill px-4">
            Add Now
          </button>
        </div>

      </div>
    </form>
  </div>
</div>
  );
}

export default StudentForm;