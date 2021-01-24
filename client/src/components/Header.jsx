import React from "react"
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header(){
    return (
    <AppBar position="static">
    <Toolbar>

    <Button color="inherit">DD's Journal</Button>
        <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
        // <header>
        
        //     <h1>DD's journal</h1>
        //     <Button>Setting</Button>
        // </header>
    )
}

export default Header;