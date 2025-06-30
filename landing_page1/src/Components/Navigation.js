import img1 from "../images/brand_logo.png";


const Navigation = () =>{
    return(
            <nav>
                <div className="logo">
                    <img src={img1} alt="logo" />
                </div>

                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button>Login</button>

            </nav>
    );
};

export default Navigation;