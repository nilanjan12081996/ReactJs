import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/Auth"
import { toast } from "react-toastify"
const Header=()=>{
    const[auth,setAuth]=useAuth()
    const handleLogout=()=>{
        setAuth(
            {...auth,user:null,token:''}
        )
        localStorage.removeItem('auth')
      toast.success('successfully logout')
    }
    return(
        <>
                  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="#">ABC School</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/contact">Contact <span className="sr-only"></span></NavLink>
      </li>
    
      {
        !auth.user?(
            <>
             <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item active">
        <NavLink className="nav-link" to="/login">Add Students <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/login">View Students <span className="sr-only"></span></NavLink>
      </li>
            </>
        ):(
                <>
                  <li className="nav-item active">
        <NavLink className="nav-link" to="/add">Add Students <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/read">View Students <span className="sr-only"></span></NavLink>
      </li>
                 <li className="nav-item">
            <NavLink className="nav-link">{auth.user.name}</NavLink> 
            </li>
             <li className="nav-item">
              <NavLink onClick={handleLogout} className="nav-link" to="/login">logout</NavLink>
            </li>
                </>
        )
      }
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </>
    )
}
export default Header