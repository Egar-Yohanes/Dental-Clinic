import React from 'react';
import '../styles/AppStyles.css'
import { NavigasiAppointment, Break, FormTable, FormTable2 } from '../components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const AppointmentPage = () => {
    return (

        <>
            <div class="mb-2">
                <NavigasiAppointment />
            </div>

            <br/><br/>

            <div class="container px-3 text-center">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3"><FormTable/></div>
                    </div>
                </div>
            </div>

            <hr/>
            <br/><br/>

            <div class="container px-3 text-center">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3"><FormTable2/></div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default AppointmentPage;
