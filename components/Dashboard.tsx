
import React from 'react';
import type { PayslipEmployee } from '../types';
import UsersIcon from './icons/UsersIcon';
import DollarSignIcon from './icons/DollarSignIcon';
import CalendarIcon from './icons/CalendarIcon';
import MoreHorizontalIcon from './icons/MoreHorizontalIcon';

const StatCard: React.FC<{ icon: React.ElementType, title: string, value: string, change: string }> = ({ icon: Icon, title, value, change }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-dark-gray mt-1">{value}</p>
            <p className="text-xs text-green-500 mt-2">{change}</p>
        </div>
        <div className="bg-brand-teal/10 p-3 rounded-full">
            <Icon className="text-brand-teal w-6 h-6" />
        </div>
    </div>
);


const mockEmployees: PayslipEmployee[] = [
    { id: '001', name: 'Adebayo Johnson', role: 'Software Engineer', email: 'a.johnson@company.ng', status: 'Paid', lastPayment: '15/07/2024', amount: 450000 },
    { id: '002', name: 'Ngozi Okonkwo', role: 'Product Manager', email: 'n.okonkwo@company.ng', status: 'Paid', lastPayment: '15/07/2024', amount: 650000 },
    { id: '003', name: 'Emeka Nwosu', role: 'UI/UX Designer', email: 'e.nwosu@company.ng', status: 'Pending', lastPayment: '15/06/2024', amount: 380000 },
    { id: '004', name: 'Fatima Bello', role: 'Data Analyst', email: 'f.bello@company.ng', status: 'Paid', lastPayment: '15/07/2024', amount: 420000 },
    { id: '005', name: 'Chinedu Eze', role: 'DevOps Engineer', email: 'c.eze@company.ng', status: 'Paid', lastPayment: '15/07/2024', amount: 510000 },
];

const EmployeeTable: React.FC<{ employees: PayslipEmployee[] }> = ({ employees }) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Recent Payslips</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Employee Name</th>
                            <th scope="col" className="px-6 py-3">Role</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Last Payment Date</th>
                            <th scope="col" className="px-6 py-3 text-right">Amount</th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-dark-gray whitespace-nowrap">
                                    {employee.name}
                                </th>
                                <td className="px-6 py-4">{employee.role}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        employee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {employee.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{employee.lastPayment}</td>
                                <td className="px-6 py-4 text-right font-medium text-dark-gray">{formatCurrency(employee.amount)}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-500 hover:text-brand-teal p-1 rounded-full hover:bg-gray-100">
                                        <MoreHorizontalIcon />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Dashboard: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={UsersIcon} title="Total Employees" value="125" change="+5 this month" />
                <StatCard icon={DollarSignIcon} title="Net Pay (July)" value="₦45,830,000" change="+2.5% vs June" />
                <StatCard icon={CalendarIcon} title="Next Payroll Date" value="15 August, 2024" change="in 21 days" />
            </div>
            <EmployeeTable employees={mockEmployees} />
        </div>
    );
};

export default Dashboard;
