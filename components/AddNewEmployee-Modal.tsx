import React, { useState } from 'react';
import XIcon from './icons/XIcon';
import CalendarInputIcon from './icons/CalendarInputIcon';
import PlusIcon from './icons/PlusIcon';

interface AddNewEmployeeModalProps {
    onClose: () => void;
}

const FormInput: React.FC<{ label: string; id: string; type?: string; placeholder: string; icon?: React.ElementType; prefix?: string }> = ({ label, id, type = 'text', placeholder, icon: Icon, prefix }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal ${Icon ? 'pl-10' : ''} ${prefix ? 'pl-12' : ''}`}
            />
            {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
            {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">{prefix}</span>}
        </div>
    </div>
);


const AddNewEmployeeModal: React.FC<AddNewEmployeeModalProps> = ({ onClose }) => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

    const stepsInfo = [
        { id: 1, name: 'Personal Information' },
        { id: 2, name: 'Job Information' },
        { id: 3, name: 'Salary & Compensation' },
        { id: 4, name: 'Review & Submit' },
    ];

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all flex flex-col"
                style={{ maxHeight: '90vh' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex-shrink-0 flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-dark-gray">Add New Employee</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100" aria-label="Close modal">
                        <XIcon />
                    </button>
                </div>

                {/* Progress Indicator */}
                <div className="flex-shrink-0 p-6">
                    <ol className="flex items-center w-full">
                        {stepsInfo.map((s, index) => (
                            <li key={s.id} className={`flex w-full items-center ${index !== stepsInfo.length - 1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block" : ""}`}>
                                <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= s.id ? 'bg-brand-teal text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {step > s.id ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" /></svg>
                                    ) : (
                                        <span className="font-bold text-lg">{s.id}</span>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-3 text-center">
                        <p className="font-semibold text-dark-gray">{stepsInfo[step-1].name}</p>
                    </div>
                </div>

                {/* Form Content */}
                <div className="flex-grow p-6 overflow-y-auto">
                    {step === 1 && (
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormInput label="First Name" id="firstName" placeholder="e.g. Chukwudi" />
                                <FormInput label="Last Name" id="lastName" placeholder="e.g. Adebayo" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <FormInput label="Date of Birth" id="dob" placeholder="Select a date" icon={CalendarInputIcon} />
                               <FormInput label="Email Address" id="email" type="email" placeholder="e.g. c.adebayo@company.ng" />
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormInput label="Phone Number" id="phone" type="tel" placeholder="e.g. 08012345678" />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                    Home Address
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows={3}
                                    placeholder="Enter employee's home address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal"
                                ></textarea>
                            </div>
                        </form>
                    )}
                    {step === 2 && (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <p>Step 2: Job Information form will go here.</p>
                        </div>
                    )}
                     {step === 3 && (
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                <FormInput label="Basic Salary" id="basicSalary" placeholder="0.00" prefix="NGN" />
                                <FormInput label="Housing Allowance" id="housingAllowance" placeholder="0.00" prefix="NGN" />
                                <FormInput label="Transport Allowance" id="transportAllowance" placeholder="0.00" prefix="NGN" />
                            </div>
                            <div className="pt-4">
                                <h4 className="text-md font-semibold text-gray-800 mb-2">Recurring Deductions</h4>
                                <p className="text-sm text-gray-500 mb-4">Add any recurring monthly deductions like pension, taxes, or loans.</p>
                                <button 
                                    type="button"
                                    className="w-full flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm font-semibold text-brand-teal hover:bg-teal-50 hover:border-brand-teal transition-colors"
                                >
                                    <PlusIcon className="w-5 h-5 mr-2" />
                                    Add Deduction
                                </button>
                            </div>
                        </form>
                    )}
                    {step === 4 && (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <p>Step 4: Review & Submit details will go here.</p>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="flex-shrink-0 flex justify-end items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl space-x-3">
                    {step === 1 && (
                        <button 
                            onClick={onClose} 
                            className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            Cancel
                        </button>
                    )}
                     {step > 1 && (
                        <button 
                            onClick={handleBack} 
                            className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            Back
                        </button>
                    )}
                    {step < 4 && (
                        <button 
                            onClick={handleNext}
                            className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal rounded-lg shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
                        >
                            Next Step
                        </button>
                    )}
                     {step === 4 && (
                        <button 
                            onClick={onClose} // Replace with submit logic later
                            className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal rounded-lg shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
                        >
                            Finish & Add Employee
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddNewEmployeeModal;