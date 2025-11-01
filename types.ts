
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

export interface PayrollRun {
    id: string;
    payPeriod: string;
    status: 'Paid' | 'Draft' | 'Awaiting Approval';
    grossPayroll: number;
    netPay: number;
    dateProcessed: string;
}

export interface PayrollReviewEmployee {
  id: string;
  name: string;
  avatarUrl: string;
  grossPay: number;
  payeTax: number;
  pension: number;
  nhf: number;
  otherDeductions: number;
  netPay: number;
}
