
import React from 'react';

const PayrollIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="M2 10h20"></path>
        <path d="M6 14h.01"></path>
        <path d="M10 14h.01"></path>
        <path d="M14 14h.01"></path>
    </svg>
);

export default PayrollIcon;
