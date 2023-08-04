import { Link } from 'react-router-dom'

const NavigasiEditPatient = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to = "/"><img width = "70px" src = "https://t3.ftcdn.net/jpg/04/81/54/40/360_F_481544062_ibRonrCo3wvqk4WRB5ZGiiTOHlS45ZY4.jpg"></img></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                < Link class = "nav-link text-light" to="/">HOMEPAGE</Link>
                            </li>
                            <li class="nav-item">
                                < Link class = "nav-link text-light" to="/appointment">APPOINTMENT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavigasiEditPatient;