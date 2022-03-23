import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import List from "./List";
import {Form} from 'react-bootstrap'

const AppointmentForm = (props) => {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const {
    data: patients,
    loading: patientsLoading,
    error: patientsError,
  } = useAxiosOnMount("/api/patients");
  const {
    data: doctors,
    loading: doctorsLoading,
    error: doctorsError,
  } = useAxiosOnMount("/api/doctors");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let appointment = { patient_id: patientId, doctor_id: doctorId, date};
    try {
      // ADD TO DB STEP
      let res = await axios.post(`/api/appointments`, appointment);
      console.log(res.data);
      navigate("/appointments");
    } catch (err) {}
  };


  if (patientsLoading || doctorsLoading) return <p>loading</p>;

  return (
    <div>
      <h1>GradeForm</h1>
      <List
        list={patients}
        renderItem={(t) => (
          <p>
            id:{t.id} name:{t.name}
          </p>
        )}
      />
      <List
        list={doctors}
        renderItem={(t) => (
          <p>
            id:{t.id} name:{t.name}
          </p>
        )}
      />

      <form onSubmit={handleSubmit}>
        <p>patient id:</p>
        <Form.Select aria-label="Default select example" onChange={(e) => setPatientId(e.target.value)}>
          {patients.map((patient)=>{
              return(  <option value={patient.id}>{patient.name} id:{patient.id}</option>)
          })}
        </Form.Select>
        <p>doctor id:</p>
        <input value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        <input value={date} onChange={(e) => setDate(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
