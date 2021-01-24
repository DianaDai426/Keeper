import React from "react"

function Foorter(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    )
}

export default Foorter;