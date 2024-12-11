'use client';

import { membersApi, membersReportApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberReportId', headerName: '식별번호' },
  { field: 'reportAt', headerName: '신고일' },
  { field: 'reporterMemberId', headerName: '신고한 회원 아이디' },
  { field: 'reportedMemberId', headerName: '신고당한 회원 아이디' },
  { field: 'reportStatuses', headerName: '신고 상태' },
  { field: 'reportContents', headerName: '신고 내용' },
];

export default function APage() {
  return <CustomDataGrid fetchApi={membersReportApi} columns={columns} />;
}
