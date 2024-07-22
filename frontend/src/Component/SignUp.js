import React from 'react';

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" placeholder="Name" 
                               className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[2.30px] focus:border-[#30C58D]"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" placeholder="Email" 
                               className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[2.30px] focus:border-[#30C58D]"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" placeholder="Password" 
                               className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[2.30px] focus:border-[#30C58D]"/>
                    </div>
                    <button type="submit" className="w-full bg-[#30C58D] text-white p-2 rounded-lg font-semibold transition duration-200">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
