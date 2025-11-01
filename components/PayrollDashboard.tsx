
import React, { useState } from 'react';
import type { PayrollRun } from '../types';
import { mockPayrollRuns } from '../data/payroll';
import DownloadIcon from './icons/DownloadIcon';

const PayrollDashboard: React.FC = () => {
    const [payrollRuns] = useState<PayrollRun[]>(mockPayrollRuns);

    const getStatusClasses = (status: PayrollRun['status']) => {
        switch (status) {
            case 'Paid':
                return 'bg-green-100 text-green-800';
            case 'Awaiting Approval':
                return 'bg-blue-100 text-blue-800';
            case 'Draft':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatCurrency = (amount: number) => {
        if (amount === 0) return '-';
        return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
             <h3 className="text-lg font-semibold text-dark-gray mb-4">Past Payroll Runs</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Pay Period</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3 text-right">Gross Payroll</th>
                            <th scope="col" className="px-6 py-3 text-right">Net Pay</th>
                            <th scope="col" className="px-6 py-3">Date Processed</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {payrollRuns.map((run) => (
                            <tr key={run.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-dark-gray whitespace-nowrap">{run.payPeriod}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusClasses(run.status)}`}>
                                        {run.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-gray-700">{formatCurrency(run.grossPayroll)}</td>
                                <td className="px-6 py-4 text-right font-bold text-dark-gray">{formatCurrency(run.netPay)}</td>
                                <td className="px-6 py-4">{run.dateProcessed}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="flex items-center text-sm font-medium text-brand-teal hover:text-teal-700">
                                        <DownloadIcon className="w-4 h-4 mr-2"/>
                                        Download Reports
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

export default PayrollDashboard;
