// Core Library Imports
import React from "react";
import { FaGoogle } from "react-icons/fa";

// Interface
interface SocialWithProps {
    children: React.ReactNode;
    label: string;

}

/** Textfield in the banner component */
const SocialBtn: React.FC<SocialWithProps> = (props, { children }) => (
    <>
        {children}
        <button className="w-2/4 border drop-shadow-xl py-2 px-5 mr-3">
            <a href="#" className="flex items-center">{props.label} </a>
        </button>
    </>
);

export default SocialBtn;