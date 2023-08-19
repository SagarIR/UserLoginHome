import React, { useState } from "react";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userJob } from "../../redux/actions/jobAction";
import Header from "../Header/header";

const JobForm = () => {
  const dispatch = useDispatch();

  const jobData = useSelector((state) => state.job);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    job: "ReactJsDeveloper",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      userJob({
        ...formData,
      })
    );
    setFormData({
      firstName: "",
      lastName: "",
      job: "ReactJsDeveloper",
    });
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Job Form</h1>
          <label htmlFor="firstName" className={styles.label}>
            Firstname:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.input}
            placeholder="Enter the firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName" className={styles.label}>
            Lastname:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.input}
            placeholder="Enter the lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="jobRole" className={styles.label}>
            JobRole:
          </label>
          <select
            name="job"
            id="jobRole"
            className={styles.select}
            value={formData.job}
            onChange={handleChange}
          >
            <option value="ReactJsDeveloper">ReactJs Developer</option>
            <option value="NodeJsDeveloper">NodeJs Developer</option>
            <option value="Python Developer">Python Developer</option>
            <option value="JavaDeveloper">Java Developer</option>
          </select>
          <button type="submit" className={styles.button}>
            Save
          </button>
        </form>
      </div>
      <div className={styles.tableContainer}>
        {jobData?.job?.length > 0 && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job Role</th>
              </tr>
            </thead>
            <tbody>
              {jobData?.job?.map(({ firstName, lastName, job }, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default JobForm;
