import React, { useState } from "react";
import { ReactComponent as Xout } from "../assets/Icons/Xout - New Gray.svg";

const NewStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    grade: "",
    image: "",
    gender: "Male",
    athlete: "No",
    college: "No",
    workforce: "No",
    interests: ["Cooking", "Finance"],
  });
  const [flag, setFlag] = useState(false);
  const [item, setItem] = useState("");
  const Upload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setStudent({
        ...student,
        image: URL.createObjectURL(img),
      });
    }
  };
  const RemoveImage = () => {
    setStudent({ ...student, image: null });
    const file = document.getElementById("file");
    file.value = null;
  };
  const AddItem = (event) => {
    if (event.key === "Enter") {
      setStudent({
        ...student,
        interests: [...student.interests, item],
      });
      setFlag(false);
      setItem("");
    }
  };
  const Submit = () => {
    console.log("student", student);
  };
  return (
    <div className="container">
      <div className="header">
        <div className="title">New Student</div>
      </div>
      <div className="card new">
        <div className="form-control">
          <div className="label">Student Name</div>
          <input
            type="text"
            className="text"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </div>
        <div className="form-control">
          <div className="label">Student Email</div>
          <input
            type="text"
            className="text"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
        </div>
        <div className="form-control">
          <div className="label">Grade</div>
          <input
            type="text"
            className="grade"
            value={student.grade}
            onChange={(e) => setStudent({ ...student, grade: e.target.value })}
          />
        </div>
        <div className="form-control">
          <div className="label">Student Profile Picture</div>
          <div className="file">
            <input className="file" id="file" type="file" onChange={Upload} />
            <div className="icon" onClick={() => RemoveImage()}>
              <Xout />
            </div>
          </div>
        </div>
        {student.image && <img src={student.image} alt="Profile" />}
        <div className="form-group">
          <div className="form-control">
            <div className="label">Gender</div>
            <div className="options">
              <div
                className={
                  student.gender === "male" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, gender: "male" })}
              >
                Male
              </div>
              <div
                className={
                  student.gender !== "male" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, gender: "female" })}
              >
                Female
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="label">Athlete</div>
            <div className="options">
              <div
                className={
                  student.athlete === "Yes" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, athlete: "Yes" })}
              >
                Yes
              </div>
              <div
                className={
                  student.athlete === "No" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, athlete: "No" })}
              >
                No
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <div className="label">College Bound</div>
            <div className="options">
              <div
                className={
                  student.college === "Yes" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, college: "Yes" })}
              >
                Yes
              </div>
              <div
                className={
                  student.college === "No" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, college: "No" })}
              >
                No
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="label">Workforce Bound</div>
            <div className="options">
              <div
                className={
                  student.workforce === "Yes" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, workforce: "Yes" })}
              >
                Yes
              </div>
              <div
                className={
                  student.workforce === "No" ? "option selected" : "option"
                }
                onClick={() => setStudent({ ...student, workforce: "No" })}
              >
                No
              </div>
            </div>
          </div>
        </div>
        <div className="form-control">
          <div className="label">Interests</div>
          <div className="options">
            {student.interests.map((interest) => (
              <div className="option">{interest}</div>
            ))}

            {flag && (
              <div className="option">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  onKeyDown={AddItem}
                />
              </div>
            )}
            {!flag && (
              <div className="plus" onClick={() => setFlag(true)}>
                +
              </div>
            )}
          </div>
        </div>
        <div className="submit" onClick={Submit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
