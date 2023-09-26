import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import WorkerCard from "./WorkerCard";
import './phonelist.css';

function Phonelist() {
    

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/users/fetchUser")
            .then(({ data }) => {
                let newData = data;
                newData.sort((a, b) => (a.isAdmin === b.isAdmin ? 0 : a.isAdmin ? -1 : 1));
                setUsersData(newData)
            console.log(data,"display");
            })
            .catch((err) => {
                console.log(err.response?.data);
                alert(err.response?.data);
            });
    }, []);

    useEffect(() => {
        console.log(usersData);
    }, [usersData]);

    return(
        <div id="Phoneslist-container">
          <div id="Phoneslist-inner" className="animate__animated animate__fadeInLeft">
          {usersData.map((element,index) => (
            <WorkerCard firstName={element.firstName} lastName={element.lastName} phoneNumber={element.phoneNumber} isAdmin={element.isAdmin} key={index}></WorkerCard>
          ))}
          </div>
       </div>
    )
}

export default Phonelist;
