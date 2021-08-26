import Featured from "../../component/featured/Featured";
import List from "../../component/list/List";
import Navbar from "../../component/navbar/Navbar";
import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjYzMTc1Mzg2ZWYwMzQ3MGRiMDZlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTk1MjEzOSwiZXhwIjoxNjMwMzg0MTM5fQ.5k2_MsTJFfYQ27mU3mH18E7vju0gheQgUo4I97V26Tg"
            }
          }
        );
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list,i)=>(
        <List list={list} key={i}/>
      ))}
      
    </div>
  );
};

export default Home;
