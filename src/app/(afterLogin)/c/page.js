'use client';

import { membersPendingProfileImage } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberVerifyId', headerName: '식별번호' },
  { field: 'memberId', headerName: '고유번호' },
  { field: 'gender', headerName: '성별' },
  { field: 'profileImageUrl', headerName: '프로필 이미지' },
  { field: 'createdAt', headerName: '등록시간' },
];

export default function CPage() {
  return (
    <CustomDataGrid
      fetchApi={membersPendingProfileImage}
      columns={columns}
      config={{
        modalField: "profileImageUrl",
        pageName: 'c',
      }}
    />
  );
}
