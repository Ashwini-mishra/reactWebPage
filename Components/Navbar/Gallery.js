import './Style.css'
import '/home/keymouseit/Desktop/Ashwini/react/my-react-project/src/Image/gal_1.jpeg';
import '/home/keymouseit/Desktop/Ashwini/react/my-react-project/src/Image/gal_2.jpg';
import '/home/keymouseit/Desktop/Ashwini/react/my-react-project/src/Image/gal_3.jpg';

function Gallery()
{
    return <div className="gallery">
    <div className="gal">
    <img
        src={require('../../Image/gal_1.jpeg').default}
        alt=""
        srcSet=""
        width="100%"
        height="400px"
    ></img>
    <h4>Premium Room</h4>
    <p>Our Hotel is ready to serve you better</p>
    </div>
    <div className="gal">
    <img
        src={require('../../Image/gal_2.jpg').default}
        alt=""
        srcSet=""
        width="100%"
        height="400px"
    ></img>
    <h4>Deluxe Room</h4>
    <p>Our Hotel is ready to serve you better</p>
    </div>
    <div className="gal">
    <img
        src={require('../../Image/gal_3.jpg').default}
        alt=""
        srcSet=""
        width="100%"
        height="400px"
    ></img>
    <h4>Super Deluxe</h4>
    <p>Our Hotel is ready to serve you better</p>
    </div>
    </div>
}
export default Gallery;