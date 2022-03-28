import './Navbar.css'
import Home from './Home'


import Images from './images/Images'

function Navbar() {
    return (

        <nav>
            <div className="left">


                <img src={Images.logo} className="logo" />

                <ul className="list">

                    <li>Collection</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>



                </ul>

            </div>

            <div className="avatar">
               
                <img src={Images.avatar} width="40" className="cart" />
            </div>

        </nav>
    )
}

export default Navbar