import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import useStyles from './styles';

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className= {classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Teri Maa ki Chut 
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Kal aana 
                    </Typography> 
                    {/* <Autocomplete> 
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>    
                            </div>
                            <InputBase placeholder="Search..." classes= {{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>  */}
                </Box>
            </Toolbar>
        </AppBar>
 
    );
}

