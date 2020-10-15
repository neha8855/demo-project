import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-light text-center py-2">
                © 2020 Copyright :
                <NavLink to="/"> Company Name</NavLink>
            </footer>
        </>
    );
};

export default Footer;