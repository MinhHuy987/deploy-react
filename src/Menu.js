import logo from './logo.svg';

function Menu(){
    return(
        <div className="menu">
          
          
               <img src={logo} className="App-logo" alt="logo" />
            
            <nav>
                <ul>
                    <li><a href="#"></a>Home
                    <ul>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                    </ul>
                    </li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Contact</li>
                    <li><a href="#"></a>Company</li>
                </ul>
            </nav>
          
        </div>
    )
}
export default Menu;