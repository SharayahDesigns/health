import '../cssFiles/basic.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  
  
    return (
        <div>
            <h1>Welcome to Eagle Mountain Health Care!</h1>
            <p>Schedule appointment today! </p>
        <p>We are accepting new patients</p>
        <button className="button" onClick={() => navigate('/appointments/new')} >Schedule Appointment</button>
        </div>
    )
}

export default Home
