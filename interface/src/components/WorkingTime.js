
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkingTime = () => {
    const [dentists, setDentists] = useState([]);

    const getDentists = async () => {
        try {
            const dentists = await axios({
                method: "get",
                url: `http://localhost:3000/dentists`,
            });

            //   console.log(todos.data);
            setDentists(dentists.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log("useEffect fire");
        getDentists();
    }, []);

    return (
        <div>
            <div class="container-fluid text-center bg-info">
                <h1 id="schedules">Schedules</h1>
                <br /><br />
                <div >
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Doctor Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Spesialization</th>
                                <th scope="col">Working Time</th>
                                <th scope="col">Phone</th>

                            </tr>
                        </thead>
                        <tbody>
                            {dentists.length !== 0 ? (
                                dentists.map((dentist) => {
                                    const { id, name, specialization, workingTime, phone } = dentist;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{specialization}</td>
                                            <td>{workingTime}</td>
                                            <td>{phone}</td>

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
                <div class="col">
                </div>
            </div>
        </div>
    )
}

export default WorkingTime;