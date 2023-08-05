import React from 'react';
import '../styles/AppStyles.css'
import { NavigasiAppointment, Break, FormTable, FormTable2 } from '../components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const AppointmentPage = () => {
    return (

        <>
            <div className="mb-2">
                <NavigasiAppointment />
            </div>

            <br/><br/>

            <div className="container px-3 text-center">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3"><FormTable/></div>
                    </div>
                </div>
            </div>

            <hr/>
            <br/><br/>

            <div className="container px-3 text-center">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3"><FormTable2/></div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default AppointmentPage;
