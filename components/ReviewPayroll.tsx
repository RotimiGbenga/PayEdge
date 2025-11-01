
import React from 'react';
import { mockPayrollReview } from '../data/payrollReview';

interface ReviewPayrollProps {
    onBack: () => void;
    onSubmit: () => void;
}

const SummaryCard: React.FC<{ title: string; value: string; color: string }> = ({ title, value, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4" style={{ borderLeftColor: color }}>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-3xl font-bold text-dark-gray mt-2">{value}</p>
    </div>
);

const ReviewPayroll: React.FC<ReviewPayrollProps> = ({ onBack, onSubmit }) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2 }).format(amount);
    };
    
    const totalGross = mockPayrollReview.reduce((sum, e) => sum + e.grossPay, 0);
    const totalDeductions = mockPayrollReview.reduce((sum, e) => sum + e.payeTax + e.pension + e.nhf + e.otherDeductions, 0);
    const totalNet = mockPayrollReview.reduce((sum, e) => sum + e.netPay, 0);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-dark-gray">Review Payroll for August 2024</h2>
                <p className="text-md text-gray-500 mt-1">Review the calculations below before submitting for approval.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard title="Total Gross Pay" value={formatCurrency(totalGross)} color="#003366" />
                <SummaryCard title="Total Deductions" value={formatCurrency(totalDeductions)} color="#F59E0B" />
                <SummaryCard title="Total Net Pay" value={formatCurrency(totalNet)} color="#009688" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-dark-gray mb-4">Employee Breakdown</h3>
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Employee Name</th>
                                <th scope="col" className="px-6 py-3 text-right">Gross Pay</th>
                                <th scope="col" className="px-6 py-3 text-right">PAYE Tax</th>
                                <th scope="col" className="px-6 py-3 text-right">Pension</th>
                                <th scope="col" className="px-6 py-3 text-right">NHF</th>
                                <th scope="col" className="px-6 py-3 text-right">Other Deductions</th>
                                <th scope="col" className="px-6 py-3 text-right">Net Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockPayrollReview.map((employee) => (
                                <tr key={employee.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <img className="h-10 w-10 rounded-full object-cover" src={employee.avatarUrl} alt={employee.name} />
                                            <div>
                                                <div className="font-medium text-dark-gray">{employee.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-gray-700">{formatCurrency(employee.grossPay)}</td>
                                    <td className="px-6 py-4 text-right text-red-600">{formatCurrency(employee.payeTax)}</td>
                                    <td className="px-6 py-4 text-right text-red-600">{formatCurrency(employee.pension)}</td>
                                    <td className="px-6 py-4 text-right text-red-600">{formatCurrency(employee.nhf)}</td>
                                    <td className="px-6 py-4 text-right text-red-600">{formatCurrency(employee.otherDeductions)}</td>
                                    <td className="px-6 py-4 text-right font-bold text-dark-gray text-base">{formatCurrency(employee.netPay)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="flex justify-end items-center pt-4 space-x-4">
                <button 
                    className="px-6 py-3 text-sm font-semibold text-brand-teal hover:bg-teal-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
                >
                    Save as Draft
                </button>
                <button 
                    onClick={onBack}
                    className="px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                >
                    Back
                </button>
                 <button 
                    onClick={onSubmit}
                    className="px-8 py-3 text-sm font-semibold text-white bg-brand-teal rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
                >
                    Submit for Approval
                </button>
            </div>
        </div>
    );
};

export default ReviewPayroll;
