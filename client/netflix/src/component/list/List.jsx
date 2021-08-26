import "./List.css";
import {useRef , useState} from 'react'
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Listitem from "../listitem/Listitem";

const List = ({list}) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)
  const listref =useRef()
  
  const handleClick =(direction)=>{
    setIsMoved(true)
    let distance = listref.current.getBoundingClientRect().x
    console.log(distance)
    if(direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber -1)
      listref.current.style.transform = `translateX(${230+distance}px)`
    }
    if(direction === "right" && slideNumber<5){
      setSlideNumber(slideNumber +1)
      listref.current.style.transform = `translateX(${-230+distance}px)`
    }
    
  }
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slideArrow left" onClick={()=>handleClick("left")} style={{display:!isMoved&&"none"}} />
        <div className="container" ref={listref}>
        {list.content.map((item,i)=>(
          <Listitem index={i} item={item} key={i}/>))}
        </div>
        <ArrowForwardIosOutlined className="slideArrow right" onClick={()=>handleClick("right")} />
      </div>
    </div>
  );
};

export default List;
