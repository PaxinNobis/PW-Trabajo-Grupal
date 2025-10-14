import Title from "./Title"
import SearchBar from "./SearchBar"
import ProfileIcon from "./ProfileIcon"
import ThreeDotsIcon from "./ThreeDotsIcon"
import "./NavBar.css"

const NavBar = () => {
    return(
        <div className="NavBar">
            <div className="col-4 Right-NavBar">
                <Title></Title>
                <ThreeDotsIcon></ThreeDotsIcon>
            </div>
            <div className="col-4 Middle-NavBar"><SearchBar></SearchBar></div>
            <div className="col-4 Left-NavBar"><ProfileIcon></ProfileIcon></div>
        </div>
    )
}
export default NavBar