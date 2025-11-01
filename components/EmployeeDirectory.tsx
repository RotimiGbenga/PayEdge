
import React, { useState } from 'react';
import { mockDirectoryEmployees } from '../data/employees';
import type { DirectoryEmployee } from '../types';
import SearchIcon from './icons/SearchIcon';
import MoreHorizontalIcon from './icons/MoreHorizontalIcon';

const EmployeeDirectory: React.FC = () => {
    const [employees] = useState<DirectoryEmployee[]>(mockDirectoryEmployees);
    
    const getStatusClasses = (status: DirectoryEmployee['status']) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'On Leave':
                return 'bg-yellow-100 text-yellow-800';
            case 'Terminated':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <div className="relative w-full md:w-auto">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search employee..."
                        className="bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                </div>
                <div className="flex items-center space-x-4">
                     <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal">
                        <option>All Departments</option>
                        <option>Engineering</option>
                        <option>Product</option>
                        <option>Design</option>
                        <option>Data Science</option>
                        <option>HR</option>
                    </select>
                    <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>On Leave</option>
                        <option>Terminated</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Employee Name</th>
                            <th scope="col" className="px-6 py-3">Employee ID</th>
                            <th scope="col" className="px-6 py-3">Job Title</th>
                            <th scope="col" className="px-6 py-3">Department</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <img className="h-10 w-10 rounded-full object-cover" src={employee.avatarUrl} alt={employee.name} />
                                        <div>
                                            <div className="font-medium text-dark-gray">{employee.name}</div>
                                            <div className="text-xs text-gray-500">{employee.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-mono text-gray-600">{employee.employeeId}</td>
                                <td className="px-6 py-4">{employee.jobTitle}</td>
                                <td className="px-6 py-4">{employee.department}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusClasses(employee.status)}`}>
                                        {employee.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-500 hover:text-brand-teal p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal">
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

export default EmployeeDirectory;
