import './Style.css'
import '/home/keymouseit/Desktop/Ashwini/react/my-react-project/src/Image/logo.jpg';
function Nav()
{
    return <div className="nav">
    <div className="logo">
    <img
        src={require('../../Image/logo.jpg').default}
        alt=""
        srcSet=""
        width="80%"
    ></img>
    </div>
        <div className="topNav">
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    </div>
}
export default Nav;