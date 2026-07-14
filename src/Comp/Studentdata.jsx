import axios from "axios";
import { useEffect, useState } from "react";

function Studentdata() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterExam, setFilterExam] = useState("All");

  const [formData, setFormData] = useState({
    studentName: "",
    subject: "",
    marks: "",
    examType: "",
  });

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5003/students");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (item) => {
    setEditId(item.id);
    setFormData(item);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateData = async () => {
    try {
      await axios.put(
        `http://localhost:5003/students/${editId}`,
        formData
      );

      alert("Data Updated Successfully");

      setEditId(null);

      setFormData({
        studentName: "",
        subject: "",
        marks: "",
        examType: "",
      });

      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-3">

      <div className="bg-white shadow-sm rounded p-4">

        <h2 className="text-center mb-4">Student Data</h2>

        <div className="row mb-4">

          <div className="col-md-3">
            <select
              className="form-select rounded-pill"
              value={filterExam}
              onChange={(e) => setFilterExam(e.target.value)}
            >
              <option value="All">All Students</option>
              <option value="Online Exam">Online Exam</option>
              <option value="Offline Exam">Offline Exam</option>
              <option value="missed Exam">Missed Exam</option>
            </select>
          </div>

          <div className="col-md-4 ms-auto">
            <input
              type="text"
              className="form-control rounded-pill text-center"
              placeholder="Search Student"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        {editId && (
          <div className="row g-3 mb-4">

            <div className="col-md-3">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Student Name"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2">
              <select
                className="form-select rounded-pill"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select Subject</option>
                <option value="javascript">Javascript</option>
                <option value="react js">React JS</option>
                <option value="html">HTML</option>
                <option value="node js">Node JS</option>
                <option value="bootstrap">Bootstrap</option>
              </select>
            </div>

            <div className="col-md-2">
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
              <select
                className="form-select rounded-pill"
                name="examType"
                value={formData.examType}
                onChange={handleChange}
              >
                <option value="Online Exam">Online Exam</option>
                <option value="Offline Exam">Offline Exam</option>
                <option value="missed Exam">Missed Exam</option>
              </select>
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-success rounded-pill w-100"
                onClick={updateData}
              >
                Update
              </button>
            </div>

          </div>
        )}


        <table className="table table-hover table-striped text-center align-middle">

          <thead className="table-primary">
            <tr>
              <th>Student Name</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Exam Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students
              .filter((item) => {
                const searchMatch = item.studentName
                  .toLowerCase()
                  .includes(search.toLowerCase());

                const examMatch =
                  filterExam === "All" ||
                  item.examType === filterExam;

                return searchMatch && examMatch;
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.studentName}</td>
                  <td>{item.subject}</td>
                  <td>{item.marks}</td>
                  <td>{item.examType}</td>

                  <td>
                    <button
                      className="btn btn-warning rounded-pill px-4"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Studentdata;