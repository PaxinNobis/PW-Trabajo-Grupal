import StreamBox from "./StreamBox"
import type { Stream } from "./StreamBox"
import "./LeftSide.css"

interface LeftSideProps {
    streams : Stream[]
}
const LeftSide = (props : LeftSideProps) => {
    return(
        <div className="LeftSideScroll container-fluid">
            <h5 className="TextBox">Channels that you follow</h5>
            {
                props.streams.map((stream : Stream) => {
                    return(
                        <StreamBox stream = {stream}></StreamBox>
                    )
                })
            }
        </div>
    )
}
export default LeftSide