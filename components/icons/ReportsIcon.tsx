
import React from 'react';

const ReportsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1V21c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V8.5L15.5 2Z"></path>
        <path d="M15 2v6h6"></path>
        <path d="M10 16h4"></path>
        <path d="M10 12h8"></path>
        <path d="M10 8h2"></path>
    </svg>
);

export default ReportsIcon;
