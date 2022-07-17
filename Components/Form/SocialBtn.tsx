import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SocialBtn = () => {
    return (
            <div>
                {/* <h1 className="text-4xl font-medium mb-5 text-center text-slate-800">Sign In</h1> */}
                <div className="flex text-slate-500">
                    <button className="w-2/4 border drop-shadow-xl py-2 px-5 mr-3">
                        <a href="#" className="flex items-center">{<FaGoogle className="mr-3 text-red-600" />} </a>
                    </button>
                    <button className="w-2/4 border drop-shadow-xl py-2 px-5">
                        <a href="#" className="flex items-center">{<FaFacebook className="mr-3 text-blue-600" />}</a>
                    </button>
                </div>
            </div>
    );
};

export default SocialBtn;