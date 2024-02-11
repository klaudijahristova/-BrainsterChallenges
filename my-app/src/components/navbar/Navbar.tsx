import { NavLink } from "react-router-dom"
import '../navbar/Navbar.css'

const Navbar =()=>{
    return(
        <>
        <NavLink to={""} className="text-decoration-none text-uppercase nav">
            <div className="w-100 d-flex justify-content-center align-items-center text-white">
                <h1 >music db</h1>
            </div>
        </NavLink>
        </>
    )
}

export default Navbar