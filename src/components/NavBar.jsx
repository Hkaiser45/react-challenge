import { useState } from "react";

function NavBar() {
    const [add,setAdd]=useState(0);
    const clickAdd= ()=>{
        setAdd(add)
    };

    return (<nav>
        
        <h1>React Challenge</h1>
        <img className="cart" src="../image/cart.jpg" alt="Logo" />
        <p>{add}</p>
    </nav>)
}
export default NavBar;