'use client';

import { membersPendingJobImage } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberVerifyId', headerName: '식별번호' },
  { field: 'memberId', headerName: '교유번호' },
  { field: 'name', headerName: '이름' },
  { field: 'nickname', headerName: '닉네임' },
  { field: 'gender', headerName: '성별' },
  { field: 'field', headerName: '분야' },
  { field: 'affiliation', headerName: '소속' },
  { field: 'jobType', headerName: '직업명' },
  { field: 'authUrl', headerName: '인증URL' },
  { field: 'websiteUrl', headerName: '웹사이트URL' },
  { field: 'createdAt', headerName: '등록시간' },
];

// test

export default function CPage() {
  return (
    <CustomDataGrid
      fetchApi={membersPendingJobImage}
      columns={columns}
      config={{
        modalField: ['authUrl', 'websiteUrl'],
        pageName: 'three-idiots-job',
      }}
    />
  );
}
