
import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';
import DownloadIcon from './icons/DownloadIcon';

interface PayrollApprovedProps {
    onDone: () => void;
}

const DownloadItem: React.FC<{ label: string }> = ({ label }) => (
    <a href="#" className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all duration-200">
        <span className="font-medium text-gray-700">{label}</span>
        <DownloadIcon className="w-5 h-5 text-brand-teal" />
    </a>
);


const PayrollApproved: React.FC<PayrollApprovedProps> = ({ onDone }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
                 <CheckCircleIcon className="w-20 h-20 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-dark-gray mt-6">Payroll Approved for August 2024</h2>
            <p className="text-md text-gray-600 mt-2 max-w-lg mx-auto">Payroll has been successfully approved and is ready for disbursement. You can now download the necessary reports and payment files.</p>
        
            <div className="text-left mt-8 space-y-4">
                <DownloadItem label="Download Payslips (PDF)" />
                <DownloadItem label="Download Bank Payment File (CSV)" />
                <DownloadItem label="Download FIRS Tax Schedule" />
                <DownloadItem label="Download Pension Schedule" />
            </div>

            <div className="mt-10">
                <button 
                    onClick={onDone}
                    className="px-8 py-3 text-sm font-semibold text-white bg-brand-blue rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
                >
                    Back to Payroll Dashboard
                </button>
            </div>
        </div>
    );
};

export default PayrollApproved;
