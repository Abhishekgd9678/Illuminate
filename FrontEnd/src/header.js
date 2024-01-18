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
          <h4 className="ml-2 font-bold text-xl">The National Institute of Engineering</h4>
        </div>
        </div>
        <div className="flex justify-center items-center">
            <div>
                <img className="h-[50px]" src={lt}/>
            </div>
           
        </div>
       
      </div>


      <div className="flex justify-center ">
        <ul className=" flex items-center *:px-4">
        <Link to=""><li>Why Attend?</li></Link>
        <Link to=""><li>Who are We?</li></Link>
        <Link to=""><li>Speakers</li></Link>
        <Link to=""><li>Schedule</li></Link>

        </ul>
      </div>
    </>
  );
};

export default Header;