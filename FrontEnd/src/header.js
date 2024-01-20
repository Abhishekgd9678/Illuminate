import logonie from "../images/logo.png";
import lt from '../images/lt.svg'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-around m-4 ">
        <div className="flex justify-center items-center">
        <div className="">
          <img className="w-[50px]" src={logonie} />
        </div>
        <div>
          <h4 className="hidden md:flex ml-2 font-bold text-xl">The National Institute of Engineering</h4>
        </div>
        </div>
        <div className="flex justify-center items-center">
            <div>
                <img className="h-[50px] md:w-auto w-14 object-cover object-left" src={lt}/>
            </div>
           
        </div>
       
      </div>


      <div className="flex justify-center w-full">
        <ul className=" flex felx-row font-medium w-10/12 md:w-full md:justify-around md:text-2xl ">
        <Link to=""><li>Why Attend?</li></Link>
        <Link to="/about"><li>Who are We?</li></Link>
        <Link to="/speaker"><li>Speakers </li></Link>
        <Link to="/schedule"><li>Schedule </li></Link>
        <Link to="/register"><li>Register</li></Link>
        <Link to="/gallery"><li>Gallery</li></Link>

        </ul>
      </div>
    </>
  );
};

export default Header;