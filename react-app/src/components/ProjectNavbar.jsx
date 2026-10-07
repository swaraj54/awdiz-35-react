import { useNavigate } from "react-router";

const ProjectNavbar = () =>{
    const navigate = useNavigate();
    return(
        <div style={{height : "70px",display:"flex", justifyContent:"space-around", backgroundColor:"black", color:"white", alignItems:"center"}}>
            <h2 onClick={() => navigate('/')}>Home</h2>
            <h2 onClick={() => navigate('/login')}>Login</h2>
            <h2 onClick={() => navigate('/register')}>Register</h2>
            <h2 onClick={() => navigate('/profile')}>Profile</h2>
            <h2 onClick={() => navigate('/logout')}>Logout</h2>
        </div>
    )
}

export default ProjectNavbar;