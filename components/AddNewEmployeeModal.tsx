
import React, { useState } from 'react';
import XIcon from './icons/XIcon';
import CalendarInputIcon from './icons/CalendarInputIcon';

interface AddNewEmployeeModalProps {
    onClose: () => void;
}

const FormInput: React.FC<{ label: string; id: string; type?: string; placeholder: string; icon?: React.ElementType }> = ({ label, id, type = 'text', placeholder, icon: Icon }) => (
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
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal ${Icon ? 'pl-10' : ''}`}
            />
            {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
        </div>
    </div>
);


const AddNewEmployeeModal: React.FC<AddNewEmployeeModalProps> = ({ onClose }) => {
    const [step] = useState(1);

    const stepsInfo = [
        { id: 1, name: 'Personal Information' },
        { id: 2, name: 'Job Information' },
        { id: 3, name: 'Salary Details' },
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
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-dark-gray">Add New Employee</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100" aria-label="Close modal">
                        <XIcon />
                    </button>
                </div>

                {/* Progress Indicator */}
                <div className="p-6">
                    <ol className="flex items-center w-full">
                        {stepsInfo.map((s, index) => (
                            <li key={s.id} className={`flex w-full items-center ${index !== stepsInfo.length - 1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block" : ""}`}>
                                <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= s.id ? 'bg-brand-teal text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    <span className="font-bold text-lg">{s.id}</span>
                                </span>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-3 text-center">
                        <p className="font-semibold text-dark-gray">{stepsInfo[step-1].name}</p>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
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
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button 
                        onClick={onClose} 
                        className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mr-3"
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal rounded-lg shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
                    >
                        Next Step
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewEmployeeModal;
