
import type { PayrollReviewEmployee } from '../types';

export const mockPayrollReview: PayrollReviewEmployee[] = [
    {
        id: '1',
        name: 'Adebayo Johnson',
        avatarUrl: 'https://i.pravatar.cc/150?u=adebayo',
        grossPay: 550000,
        payeTax: 45000,
        pension: 22000,
        nhf: 5500,
        otherDeductions: 0,
        netPay: 477500
    },
    {
        id: '2',
        name: 'Ngozi Okonkwo',
        avatarUrl: 'https://i.pravatar.cc/150?u=ngozi',
        grossPay: 720000,
        payeTax: 85000,
        pension: 36000,
        nhf: 7200,
        otherDeductions: 10000,
        netPay: 581800
    },
    {
        id: '3',
        name: 'Emeka Nwosu',
        avatarUrl: 'https://i.pravatar.cc/150?u=emeka',
        grossPay: 480000,
        payeTax: 38000,
        pension: 19200,
        nhf: 4800,
        otherDeductions: 0,
        netPay: 418000
    },
    {
        id: '4',
        name: 'Fatima Bello',
        avatarUrl: 'https://i.pravatar.cc/150?u=fatima',
        grossPay: 510000,
        payeTax: 42500,
        pension: 20400,
        nhf: 5100,
        otherDeductions: 0,
        netPay: 442000
    },
    {
        id: '5',
        name: 'Chinedu Eze',
        avatarUrl: 'https://i.pravatar.cc/150?u=chinedu',
        grossPay: 680000,
        payeTax: 79000,
        pension: 34000,
        nhf: 6800,
        otherDeductions: 5000,
        netPay: 555200
    },
];
