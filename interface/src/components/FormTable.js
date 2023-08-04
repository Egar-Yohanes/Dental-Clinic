import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormTable = () => {
    const [patients, setPatients] = useState([]);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [editingPatient, setEditingPatient] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const getPatients = async () => {
        try {
            const patients = await axios({
                method: "get",
                url: `http://localhost:3000/patients`,
            });

            //   console.log(todos.data);
            setPatients(patients.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log("useEffect fire");
        getPatients();
    }, []);

    const addPatient = async () => {
        try {
            const result = await axios({
                method: "post",
                url: `http://localhost:3000/patients/add`,
                data: {
                    username,
                    name,
                    email,
                    password,
                    address,
                    phone,
                    birthdate

                },
            });
            // console.log(result);
            Swal.fire("Good job!", "Task has been successfully added", "success");
            getPatients();
        } catch (err) {
            console.log(err);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addPatient();
    };

    const deletePatient = async (id) => {
        try {
            await axios({
                method: "delete",
                url: `http://localhost:3000/patients/${id}`,
            });
            getPatients();
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
                deletePatient(id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    const updatePatients = async (id) => {
        try {
            await axios({
                method: "put",
                url: `http://localhost:3000/patients/${id}`,
                data: {
                    name,
                    address,
                    phone,
                    birthdate
                },
            });
            setIsEditing(false);
            getPatients();
        } catch (err) {
            console.log(err);
        }
    };


    const getPatientById = async (patientId) => {
        try {
            const result = await axios({
                method: "GET",
                url: `http://localhost:3000/patients/${patientId}`,
            });
            const { id, name } = result.data;
            Swal.fire(
                "Patient Biodata",
                `Patient ID ${id} - ${name}`,
                "info"
            );
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="main-content container overflow-y-scroll">
            <div className="row">
                <div className="col-12">
                    <h3>Fill the Form to get your Patient ID</h3>
                    <hr />
                </div>
                <div className="col-4">
                    <h3>Fill Your Identity Here</h3>
                    <hr />
                    <form>
                        <div className="mb-3">
                            <label>Username</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
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
                                <th>Name</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {patients.length !== 0 ? (
                                patients.map((patient) => {
                                    const { id, name } = patient;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>
                                                <button
                                                    onClick={() => deleteHandler(id)}
                                                    className="btn btn-info btn-sm">
                                                    Delete
                                                </button>
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

export default FormTable;