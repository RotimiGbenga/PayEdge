
import React from 'react';
import DashboardIcon from './icons/DashboardIcon';
import EmployeesIcon from './icons/EmployeesIcon';
import PayrollIcon from './icons/PayrollIcon';
import ReportsIcon from './icons/ReportsIcon';
import SettingsIcon from './icons/SettingsIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface SidebarProps {
    activeLink: string;
    setActiveLink: (link: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeLink, setActiveLink }) => {
    const navItems = [
        { name: 'Dashboard', icon: DashboardIcon },
        { name: 'Employees', icon: EmployeesIcon },
        { name: 'Payroll', icon: PayrollIcon },
        { name: 'Reports', icon: ReportsIcon },
        { name: 'Settings', icon: SettingsIcon },
    ];

    return (
        <aside className="w-64 bg-brand-blue text-white flex-shrink-0 flex flex-col h-screen sticky top-0">
            <div className="h-20 flex items-center justify-center px-6 border-b border-blue-500 border-opacity-30">
                <h1 className="text-2xl font-bold tracking-wider">TCL PayEdge</h1>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveLink(item.name)
                        }}
                        className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                            activeLink === item.name
                                ? 'bg-brand-teal text-white'
                                : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                        }`}
                    >
                        <item.icon className="w-5 h-5 mr-4" />
                        <span className="font-medium">{item.name}</span>
                    </a>
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-blue-500 border-opacity-30">
                <div className="flex items-center">
                    <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://picsum.photos/100"
                        alt="User avatar"
                    />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-white">Chukwudi Adebayo</p>
                        <p className="text-xs text-blue-200">chukwudi@company.ng</p>
                    </div>
                    <ChevronDownIcon className="ml-auto w-5 h-5 text-blue-200" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
