'use client';

import { membersApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberId', headerName: '멤버아이디' },
  { field: 'name', headerName: '이름' },
  { field: 'nickname', headerName: '닉네임' },
  { field: 'gender', headerName: '성별' },
  { field: 'birthDate', headerName: '생년월일' },
  { field: 'memberStatus', headerName: '멤버상태' },
  { field: 'invitationCodeEntered', headerName: '초대코드성별' },
  { field: 'invitedMemberId', headerName: '초대코드아이디' },
  { field: 'pushAlarmEnabled', headerName: '알림허용여부' },
  { field: 'oauthEmail', headerName: '로그인이메일' },
  { field: 'oauthType', headerName: '로그인타입' },
  { field: 'phoneNumber', headerName: '전화번호' },
  { field: 'deviceType', headerName: '기기타입' },
];

export default function APage() {
  return <CustomDataGrid fetchApi={membersApi} columns={columns} />;
}
