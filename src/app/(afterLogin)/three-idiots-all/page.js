'use client';

import { membersApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberId', headerName: '식별번호' },
  { field: 'memberType', headerName: '회원타입' },
  { field: 'name', headerName: '이름' },
  { field: 'gender', headerName: '성별' },
  { field: 'birthDate', headerName: '생년월일' },
  { field: 'authEmail', headerName: '계정 이메일' },
  { field: 'schoolEmail', headerName: '학교 이메일' },
  { field: 'school', headerName: '학교' },
  { field: 'phone', headerName: '연락처' },
  { field: 'status', headerName: '상태' },
];

export default function APage() {
  return <CustomDataGrid fetchApi={membersApi} columns={columns} />;
}
