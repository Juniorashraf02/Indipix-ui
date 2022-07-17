import React from 'react';



const NameAndPass: React.FC = () => {
    return (
        <div>
           <label htmlFor="email or username">
        <input
          type="email"
          name="email or username"
          placeholder="Username or Email Address"
          className="border border-slate-200 rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label> 
        </div>
    );
};

export default NameAndPass;