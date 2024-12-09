'use client';

import { membersPendingJobImage } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberVerifyId', headerName: '식별번호' },
  { field: 'memberId', headerName: '교유번호' },
  { field: 'name', headerName: '이름' },
  { field: 'affiliation', headerName: '소속' },
  { field: 'jobType', headerName: '활동명' },
  { field: 'authUrl', headerName: '인증URL' },
  { field: 'createdAt', headerName: '등록시간' },
];

// test

export default function CPage() {
  return (
    <CustomDataGrid
      fetchApi={membersPendingJobImage}
      columns={columns}
      config={{
        modalField: 'authUrl',
        pageName: 'three-idiots-job',
      }}
    />
  );
}
