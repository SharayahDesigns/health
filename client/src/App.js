import {Link,Outlet} from "react-router-dom";
import '../src/App.css'

function App() {
  return (
    <div  >
      <nav className="header"
        style={{
          padding: "0 20px",
          borderBottom: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>EM Health</h1>
        <nav >
          <Link className="link" to="/home">Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/patients">Patients</Link>
          <Link className='link' to="/doctors">Doctors</Link>
          <Link className='link' to="/appointments">Appointments</Link>
          <Link className='link' to="/appointments/new">New Appointments</Link>
          
          
        </nav>
      </nav>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
