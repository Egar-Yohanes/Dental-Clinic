import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormTable2 = () => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [status, setStatus] = useState("");
    const [patientId, setPasientId] = useState("");
    const [dentistId, setDentistId] = useState("");

    const getAppointments = async () => {
        try {
            const appointments = await axios({
                method: "get",
                url: `http://localhost:3000/appointments`,
            });

            setAppointments(appointments.data);
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        console.log("useEffect fire");
        getAppointments();
    }, []);

    const addAppointment = async () => {
        try {
            const result = await axios({
                method: "post",
                url: `http://localhost:3000/appointments/add`,
                data: {
                    treatment,
                    appointmentTime,
                    status,
                    patientId,
                    dentistId
                },
            });
            Swal.fire("Task has been successfully added", "success");
            getAppointments();
        } catch (err) {
            console.log(err);
        }
    };

    const updateStatusAppointments = async (id, status) => {
        try {
            await axios({
                method: "put",
                url: `http://localhost:3000/appointments/update/${id}`,
                data: {
                    status
                },
            });
            getAppointments();
        } catch (err) {
            console.log(err);
        }
    };


    const updateStatusHandler = async (id) => {
        try {
            const inputOptions = new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        'Approved': 'Approved',
                        'In Progress': 'In Progress',
                        'Done': 'Done',
                        'Canceled': 'Cancelled',
                    })
                }, 1000)
            })

            const { value: status } = await Swal.fire({
                title: 'Select Your Appointment Status',
                input: 'radio',
                inputOptions: inputOptions,
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to choose your Appointment Status!'
                    }
                }
            })

            if (status) {
                updateStatusAppointments(id, status); 
                Swal.fire("Updated!", "Your Appointment Status has been Updated.", "success!");

            }
        }

        catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addAppointment();
    };

    const deleteAppointment = async (id) => {
        try {
            await axios({
                method: "delete",
                url: `http://localhost:3000/appointments/delete/${id}`,
            });
            getAppointments();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAppointment(id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };


    return (
        <div className="main-content container overflow-y-scroll">
            <div className="row">
                <div className="col-12">
                    <h3>MAKE AN APPOINTMENT</h3>
                    <h6>Contact US and Get your Patient ID by Fill the Form Above first, before making an appointment</h6>
                    <hr />
                </div>
                <div className="col-4">
                    <h3>Make Your Appointment</h3>
                    <hr />
                    <form>
                        <div className="mb-3">
                            <label>Treatment</label>
                            <input
                                onChange={(e) => setTreatment(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Appointment Time</label>
                            <input
                                onChange={(e) => setAppointmentTime(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Status</label>
                            <input
                                onChange={(e) => setStatus(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Dentist ID</label>
                            <input
                                onChange={(e) => setDentistId(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Patient ID</label>
                            <input
                                onChange={(e) => setPasientId(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>



                        <div className="mb-3">
                            <button onClick={submitHandler} className="btn btn-success w-100">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Treatment</th>
                                <th>Appointment Time</th>
                                <th>Status</th>
                                <th>Edit Status</th>
                                <th>Patient ID</th>
                                <th>Dentist ID</th>
                                <th>Delete List</th>
                            </tr>
                        </thead>
                        <tbody >
                            {appointments.length !== 0 ? (
                                appointments.map((appointment) => {
                                    const { id, treatment, appointmentTime, status, patientId, dentistId } = appointment;
                                    return (
                                        <tr key={id} >
                                            <td>{id}</td>
                                            <td>{treatment}</td>
                                            <td>{appointmentTime}</td>
                                            <td>{status}</td>
                                            <td>
                                                <button onClick={() => updateStatusHandler(id)} className="btn btn-danger btn-sm">update</button>
                                            </td>
                                            <td>{patientId}</td>
                                            <td>{dentistId}</td>
                                            <td>
                                                <button onClick={() => deleteHandler(id)} className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={3}>
                                        <h3>There's no data.</h3>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FormTable2;