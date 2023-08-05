import React from 'react';
import "../styles/AppStyles.css"
import { Navigasi, Facilities, Team, WorkingTime, Address, PostTreatment, Break, Footer } from '../components/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const HomePage = () => {
    return (
        <>
            <div className="mb-2">
                <Navigasi> </Navigasi>
            </div>

            <div>
                <img width="2000px" src="https://img.freepik.com/free-vector/flat-dental-clinic-twitter-header_23-2149333507.jpg" className="img-fluid" alt="banner" />
            </div>

            <Break />

            <div>
                <Team />
            </div>


            <Break />

            <div>
                <WorkingTime />
            </div>

            <Break />

            <div>
                <Address />
            </div>

            <Break/>

            <div>
                <Facilities />
            </div>

            <Break />

            <div>
                <PostTreatment />
            </div>

            <Break />

            <div>
                <Footer/>
            </div>
        </>
    );
}

export default HomePage;
