
export interface Employee {
    id: string;
    name: string;
    role: string;
    email: string;
    status: 'Paid' | 'Pending';
    lastPayment: string;
    amount: number;
}
