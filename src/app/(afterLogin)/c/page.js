'use client';

import { membersApprovalApi } from '@/api/member/member.api';
import useMemberStore from '@/store/member.js/member';
import { useRouter } from 'next/navigation';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberId', headerName: '식별번호' },
  { field: 'name', headerName: '이름' },
  { field: 'major', headerName: '학과' },
  { field: 'studentId', headerName: '학번' },
  { field: 'schoolName', headerName: '학교' },
  { field: 'phone', headerName: '연락처' },
  { field: 'openKakaoRoomStatus', headerName: '카카오 상태' },
  { field: 'profileImageStatus', headerName: '프로필 상태' },
  { field: 'studentIdImageStatus', headerName: '학생증 상태' },
];

export default function CPage() {
  const router = useRouter();
  const setMember = useMemberStore((state) => state.setMember);

  const handleCellClick = (params) => {
    if (
      params.field === 'openKakaoRoomStatus' ||
      params.field === 'profileImageStatus' ||
      params.field === 'studentIdImageStatus'
    ) {
      const { memberId } = params.row;
      setMember({ ...params.row, field: params.field });
      router.push(`/c/image/${memberId}`);
    }
  };

  return <CustomDataGrid fetchApi={membersApprovalApi} columns={columns} handleCellClick={handleCellClick} />;
}
