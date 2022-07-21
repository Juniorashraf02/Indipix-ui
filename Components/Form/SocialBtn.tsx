// Core Library Imports
import React from "react";


import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

// Interface
interface SocialWithProps {
    children?: React.ReactNode;
    gtext: string;
    ftext: string;

}


const SocialBtn: React.FC<SocialWithProps> = (props, { children }) => (
    <>
        {children}
        <div className="flex">
        <button className="w-2/4 border drop-shadow-xl py-2 px-5 mr-3">
            <a href="#" className="flex items-center">
                <FcGoogle className="text-2xl "/>
                {props.gtext} 
                </a>
        </button>
        <button className="w-2/4 border drop-shadow-xl py-2 px-5 mr-3">
            <a href="#" className="flex items-center">
                <FaFacebook className="text-2xl "/>
                {props.ftext} 
                </a>
        </button>
        </div>
    </>
);

export default SocialBtn;



// const SocialBtn = () => {
//     return (
//             <div>
//                 {/* <h1 className="text-4xl font-medium mb-5 text-center text-slate-800">Sign In</h1> */}
//                 <div className="flex text-slate-500">
//                     <button className="w-2/4 border drop-shadow-xl py-2 px-5 mr-3">
//                         <a href="#" className="flex items-center">{<FaGoogle className="mr-3 text-red-600" />} </a>
//                     </button>
//                     <button className="w-2/4 border drop-shadow-xl py-2 px-5">
//                         <a href="#" className="flex items-center">{<FaFacebook className="mr-3 text-blue-600" />}</a>
//                     </button>
//                 </div>
//             </div>
//     );
// };

// export default SocialBtn;
