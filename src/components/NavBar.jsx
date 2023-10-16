import { useState } from "react";

function NavBar() {
    const [add,setAdd]=useState(0);
    const clickAdd= ()=>{
        setAdd(add)
    };

    return (<nav>
        <img src="image/vite.svg" alt="Logo" />
        <h1>React Challenge</h1>
        <p>shopping cart {add}</p>
    </nav>)
}
export default NavBar;