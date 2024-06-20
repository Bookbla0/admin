'use client';

import { membersPendingKakao } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberVerifyId', headerName: '식별번호' },
  { field: 'memberId', headerName: '고유번호' },
  { field: 'name', headerName: '이름' },
  { field: 'openKakaoRoomUrl', headerName: '카카오URL' },
  { field: 'createdAt', headerName: '등록시간' },
];

export default function CPage() {
  return (
    <CustomDataGrid
      fetchApi={membersPendingKakao}
      columns={columns}
      config={{
        modalField: 'openKakaoRoomUrl',
        pageName: 'three-idiots-kakao',
      }}
    />
  );
}
