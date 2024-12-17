'use client';

import { membersApi, membersPaymentApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberId', headerName: '식별번호' },
  { field: 'name', headerName: '이름' },
  { field: 'nickname', headerName: '닉네임' },
  { field: 'gender', headerName: '성별' },
  { field: 'age', headerName: '나이' },
  { field: 'paymentType', headerName: '결제 타입' },
  { field: 'money', headerName: '금액' },
  { field: 'createdAt', headerName: '결제일' },
];

export default function APage() {
  return <CustomDataGrid fetchApi={membersPaymentApi} columns={columns} />;
}
