import "./Listitem.css";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {
  PlayArrow,
  Add,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import axios from "axios";

const Listitem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(()=>{
    const getMovie=async()=>{
      try{
        const res = await axios.get("movies/find/"+item, {
          headers: {
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjYzMTc1Mzg2ZWYwMzQ3MGRiMDZlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTk1MjEzOSwiZXhwIjoxNjMwMzg0MTM5fQ.5k2_MsTJFfYQ27mU3mH18E7vju0gheQgUo4I97V26Tg"
          }
        })
        setMovie(res.data)
      }

      catch(err){
        console.log(err)

      }
    }
    getMovie()
  },[item])

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <Link to={{pathname:"/watch",movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 + (index*2.5) }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add  className="icon"/>
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 Hour 14 min</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
};

export default Listitem;
