
import React from 'react';
import SearchIcon from './icons/SearchIcon';
import BellIcon from './icons/BellIcon';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 h-20 flex-shrink-0">
            <div className="flex items-center justify-between px-4 md:px-8 h-full">
                <div>
                    <h2 className="text-xl font-semibold">Good morning, Chukwudi</h2>
                    <p className="text-sm text-gray-500">Welcome back and explore your dashboard.</p>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative hidden md:block">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                        />
                    </div>
                    <button className="relative text-gray-500 hover:text-dark-gray">
                        <BellIcon />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </button>
                    <button className="bg-brand-teal text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-200">
                        Run Payroll
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
