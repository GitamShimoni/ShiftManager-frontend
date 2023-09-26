

import "..//WorkerComponents/Workernavbar.css";

import { Link, Outlet } from "react-router-dom";
function Managernavbar() {

  const date = new Date();
  const hour = date.getHours();
  let stringhour;
  if (hour >= 6 && hour < 12) {
    stringhour = "Morning";
  } else if (hour >= 12 && hour < 17) {
    stringhour = "Noon";
  } else if (hour >= 17 && hour < 21) {
    stringhour = "Evening";
  } else {
    stringhour = "Night";
  }
  return (
    <div>
      <div id="navbardiv">
        <div id="divoflogo">
          <img
            className="animate__animated animate__fadeInLeft"
            id="imgLogo"
            src="https://cdn-icons-png.flaticon.com/512/5774/5774430.png"
            alt="pic"
          ></img>
        </div>
        <div id="goodhour-div">
          <h3 id="goodhour-h3">{`Good ${stringhour}, to you`}</h3>
        </div>
        <Link to={"/Manager"}>
          <div className="object-nav">Confirm shifts</div>
        </Link>
        <Link to={"History"}>
          <div className="object-nav">History and data</div>
        </Link>
        <Link to={"phonelist"}>
          <div className="object-nav">Phones list</div>
        </Link>
        <Link to={"UserController"}>
          <div className="object-nav">User Controller</div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
export default Managernavbar;
