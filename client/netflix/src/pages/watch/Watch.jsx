import './Watch.css'
import {ArrowBackOutlined } from '@material-ui/icons'

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video clasName="video" autoPlay={true} controls loop progress src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"/>
            
        </div>
    )
}

export default Watch
