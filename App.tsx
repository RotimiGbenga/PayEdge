
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import EmployeeDirectory from './components/EmployeeDirectory';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState('Employees');

    const renderContent = () => {
        switch (activePage) {
            case 'Employees':
                return <EmployeeDirectory />;
            case 'Dashboard':
            default:
                return <Dashboard />;
        }
    }

    return (
        <div className="bg-gray-50 font-sans text-dark-gray min-h-screen">
            <div className="flex">
                <Sidebar activeLink={activePage} setActiveLink={setActivePage} />
                <main className="flex-1 min-w-0">
                    <div className="flex flex-col h-screen">
                        <Header activePage={activePage} />
                        <div className="flex-1 overflow-y-auto p-4 md:p-8">
                            {renderContent()}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
