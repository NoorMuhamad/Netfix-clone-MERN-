import "./List.css";
import {useRef , useState} from 'react'
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Listitem from "../listitem/Listitem";

const List = () => {
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
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slideArrow left" onClick={()=>handleClick("left")} style={{display:!isMoved&&"none"}} />
        <div className="container" ref={listref}>
          <Listitem index={0} />
          <Listitem index={1}/>
          <Listitem index={2}/>
          <Listitem index={3}/>
          <Listitem index={4}/>
          <Listitem index={5}/>
          <Listitem index={6}/>
          <Listitem index={7}/>
          <Listitem index={8}/>
          <Listitem index={9}/>
        </div>
        <ArrowForwardIosOutlined className="slideArrow right" onClick={()=>handleClick("right")} />
      </div>
    </div>
  );
};

export default List;
