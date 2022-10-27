import React from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '400',
        fontFamily: 'Roboto',
        gap: '5px',
        "& a": {
            color: '#000',
            textDecoration: 'none',
        }
    },
    menu: {
        textDecoration: 'none',
        fontSize: '15px',
        padding: '10px 15px',
        color: '#000',
        '&:active': { Color: 'primary.main', }
    },
    sign: {
        "& a": {
            background: '#319D8E',
            padding: '8px 17px',
            borderRadius: '8px',
        }
    }
});

const pages = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Courses",
        path: "/Coursess"
    },
    {
        name: "Teachers",
        path: "/Teachers"
    },
    {
        name: "Contact",
        path: "/Contact"
    },
    {
        name: "About",
        path: "/About"
    }
];
function Navbar() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.nav}>
                {
                    pages.map(({ name, path }) => (
                        <Link key={name} href="" className={classes.menu} >
                            {name}
                        </Link>
                    ))
                }
                <Box className={classes.sign}>
                    <Link href="#">Sign In</Link>
                </Box>
            </Box>
        </>
    )
}

export default Navbar