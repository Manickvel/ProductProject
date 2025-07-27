import { useNavigate } from "react-router-dom";
import './../styles/login.css'
import './../styles/home.css'
const Home = () => {
    const navigate = useNavigate();
  return (
 <div className="main">
        <div className="container homecard">
            <div className="homecard">
            <h1 className="test">Product Show Case</h1>
            <p className="text-center pb-18 pt-2 font-medium text-black  font-bold con">Looking for something special? Explore our wide range of products and enjoy a seamless shopping experience – your next favorite item is just a click away!</p>
            <button className="homebutton" onClick={()=>navigate('/users')} style={{color:'#4c0082'}}> <span>Get Started ---{'>'} </span></button>
            
            </div>
        </div >
    </div>
  );
}
export default Home;