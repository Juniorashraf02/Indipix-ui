// Core Library Imports
import React from "react";

// Interface
interface TextFieldWithProps {
    children: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
}

/** Textfield in the banner component */
const TextField: React.FC<TextFieldWithProps> = (props, { children }) => (
    <>
        {children}
        <input type={props.type} name={props.name} placeholder={props.placeholder} className="border border-slate-200 rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </>
);

export default TextField;
