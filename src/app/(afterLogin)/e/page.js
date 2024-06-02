'use client';

import { membersApprovalApi, membersPendingKakao } from '@/api/member/member.api';
import useMemberStore from '@/store/member.js/member';
import { useRouter } from 'next/navigation';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberVerifyId', headerName: '식별번호' },
  { field: 'memberId', headerName: '고유번호' },
  { field: 'name', headerName: '이름' },
  { field: 'openKakaoRoomUrl', headerName: '카카오URL' },
];

export default function CPage() {
  return <CustomDataGrid fetchApi={membersPendingKakao} columns={columns}
                         config={{
                           modalField: "openKakaoRoomUrl",
                           pageName: 'e',
                         }}
  />;
}
