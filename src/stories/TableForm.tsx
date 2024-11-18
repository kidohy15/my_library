import React, { useState } from "react";
import "./tableForm.css";

type FormData = {
  name: string;
  username: string;
  password: string;
  retypePassword: string;
  gender: string;
  skills: string[];
  email: string;
  college: string;
};

export const TableForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    password: "",
    retypePassword: "",
    gender: "",
    skills: [],
    email: "",
    college: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
  
    if (type === "checkbox" && target instanceof HTMLInputElement) {
      const { checked } = target; // checked 속성 안전하게 참조
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };
  return (
    <>
      {/* 기본 폼 */}
      <div className="TableForm_body">
        <table>
          <tr>
            <td colSpan={2}>
              <center>Student Registration Form</center>
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Username:</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Password:</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Re-type Password:</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Gender:</td>
            <td>
              <input type="radio" name="gender" />
              Male
              <input type="radio" name="gender" />
              Female
              <input type="radio" name="gender" />
              Other
            </td>
          </tr>

          <tr>
            <td>Programing skills:</td>
            <td>
              <input type="checkbox" />
              Java
              <input type="checkbox" />
              Android
              <input type="checkbox" />
              Rudy
              <input type="checkbox" />
              Net.
            </td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Collage:</td>
            <td>
              <select>
                <option>Select</option>
                <option>IIt Bombay</option>
                <option>NIIT</option>
                <option>BIITS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <input type="submit" name="submit" />
            </td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <br />

       {/* react 용으로 만든 form */}
       <div className="tableForm-body">
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <h3>Student Registration Form</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Username:</td>
                <td>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Re-type Password:</td>
                <td>
                  <input
                    type="password"
                    name="retypePassword"
                    value={formData.retypePassword}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Gender:</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </td>
              </tr>

              <tr>
                <td>Programming Skills:</td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name="skills"
                      value="Java"
                      checked={formData.skills.includes("Java")}
                      onChange={handleChange}
                    />
                    Java
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="skills"
                      value="Android"
                      checked={formData.skills.includes("Android")}
                      onChange={handleChange}
                    />
                    Android
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="skills"
                      value="Ruby"
                      checked={formData.skills.includes("Ruby")}
                      onChange={handleChange}
                    />
                    Ruby
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="skills"
                      value=".Net"
                      checked={formData.skills.includes(".Net")}
                      onChange={handleChange}
                    />
                    .Net
                  </label>
                </td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>College:</td>
                <td>
                  <select
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="IIT Bombay">IIT Bombay</option>
                    <option value="NIIT">NIIT</option>
                    <option value="BIITS">BIITS</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
