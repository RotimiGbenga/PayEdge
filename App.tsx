
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import EmployeeDirectory from './components/EmployeeDirectory';
import AddNewEmployeeModal from './components/AddNewEmployeeModal';
import PayrollDashboard from './components/PayrollDashboard';
import ReviewPayroll from './components/ReviewPayroll';
import PayrollApproved from './components/PayrollApproved';

type PayrollStep = 'dashboard' | 'review' | 'approved';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState('Employees');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [payrollStep, setPayrollStep] = useState<PayrollStep>('dashboard');

    const handlePageChange = (page: string) => {
        setActivePage(page);
        // Always reset payroll flow when navigating to a new main page
        setPayrollStep('dashboard');
    };

    const renderContent = () => {
        switch (activePage) {
            case 'Employees':
                return <EmployeeDirectory />;
            case 'Payroll':
                switch (payrollStep) {
                    case 'review':
                        return <ReviewPayroll 
                                    onBack={() => setPayrollStep('dashboard')} 
                                    onSubmit={() => setPayrollStep('approved')} 
                                />;
                    case 'approved':
                        return <PayrollApproved onDone={() => setPayrollStep('dashboard')} />;
                    case 'dashboard':
                    default:
                         return <PayrollDashboard />;
                }
            case 'Dashboard':
            default:
                return <Dashboard />;
        }
    }

    return (
        <div className="bg-gray-50 font-sans text-dark-gray min-h-screen">
            <div className="flex">
                <Sidebar activeLink={activePage} setActiveLink={handlePageChange} />
                <main className="flex-1 min-w-0">
                    <div className="flex flex-col h-screen">
                        <Header 
                            activePage={activePage} 
                            onAddNewEmployeeClick={() => setIsModalOpen(true)}
                            onRunNewPayrollClick={() => setPayrollStep('review')}
                        />
                        <div className="flex-1 overflow-y-auto p-4 md:p-8">
                            {renderContent()}
                        </div>
                    </div>
                </main>
            </div>
            {isModalOpen && <AddNewEmployeeModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default App;
