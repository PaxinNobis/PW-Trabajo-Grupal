import "./PointsBar.css"
const PointsBar = () => {
    return(
        <div className="d-flex justify-content-around PointsBar">
            <i className="bi bi-stars">UserCoins</i>
            <i className="bi bi-airplane-engines-fill">UserPoints</i>
        </div>
    )
}
export default PointsBar