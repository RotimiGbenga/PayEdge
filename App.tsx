
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    return (
        <div className="bg-gray-50 font-sans text-dark-gray min-h-screen">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 min-w-0">
                    <div className="flex flex-col h-screen">
                        <Header />
                        <div className="flex-1 overflow-y-auto p-4 md:p-8">
                            <Dashboard />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
