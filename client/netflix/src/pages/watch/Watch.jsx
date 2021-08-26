import './Watch.css'
import {ArrowBackOutlined } from '@material-ui/icons'
import {useLocation,Link} from 'react-router-dom'

const Watch = () => {
    const location= useLocation();
   const movie = location.movie

    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </Link>
            <video className="video" autoPlay={true} controls loop src={movie.video}/>
            
        </div>
    )
}

export default Watch
