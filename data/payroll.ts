
import type { PayrollRun } from '../types';

export const mockPayrollRuns: PayrollRun[] = [
    {
        id: 'PR-005',
        payPeriod: 'July 2024',
        status: 'Paid',
        grossPayroll: 48350000,
        netPay: 45830000,
        dateProcessed: '15/07/2024',
    },
    {
        id: 'PR-004',
        payPeriod: 'June 2024',
        status: 'Paid',
        grossPayroll: 47950000,
        netPay: 44710000,
        dateProcessed: '14/06/2024',
    },
    {
        id: 'PR-003',
        payPeriod: 'May 2024',
        status: 'Paid',
        grossPayroll: 47800000,
        netPay: 44650000,
        dateProcessed: '15/05/2024',
    },
    {
        id: 'PR-DRAFT-01',
        payPeriod: 'August 2024',
        status: 'Draft',
        grossPayroll: 0,
        netPay: 0,
        dateProcessed: 'N/A',
    },
     {
        id: 'PR-AWAIT-01',
        payPeriod: 'July 2024 (Supplementary)',
        status: 'Awaiting Approval',
        grossPayroll: 1250000,
        netPay: 1180000,
        dateProcessed: '28/07/2024',
    },
];
