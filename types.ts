
export interface PayslipEmployee {
    id: string;
    name: string;
    role: string;
    email: string;
    status: 'Paid' | 'Pending';
    lastPayment: string;
    amount: number;
}

export interface DirectoryEmployee {
    id: string;
    name: string;
    avatarUrl: string;
    employeeId: string;
    jobTitle: string;
    department: 'Engineering' | 'Product' | 'Design' | 'Data Science' | 'HR';
    status: 'Active' | 'On Leave' | 'Terminated';
    email: string;
}
