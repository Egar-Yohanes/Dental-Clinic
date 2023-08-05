import { Link } from 'react-router-dom'

const NavigasiEditPatient = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to = "/"><img width = "70px" src = "https://t3.ftcdn.net/jpg/04/81/54/40/360_F_481544062_ibRonrCo3wvqk4WRB5ZGiiTOHlS45ZY4.jpg"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                < Link className = "nav-link text-light" to="/">HOMEPAGE</Link>
                            </li>
                            <li className="nav-item">
                                < Link className = "nav-link text-light" to="/appointment">APPOINTMENT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavigasiEditPatient;