// Core Library Imports
import React from "react";

// Interface
interface SubmitWithProps {
    children: React.ReactNode;
    value: string;

}

/** Textfield in the banner component */
const SubmitBtn: React.FC<SubmitWithProps> = (props, { children }) => (
    <>
        {children}
        <input type="submit" name="submit" value={props.value} className="border border-slate-200 rounded w-full py-2 px-3 mt-7 text-slate-50 bg-red-500 leading-tight focus:outline-none focus:shadow-outline" />
    </>
);

export default SubmitBtn;
