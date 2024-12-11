'use client';

import { membersApi, membersBookmarkApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberId', headerName: '멤버 아이디' },
  { field: 'memberBookmarkId', headerName: '북마크 식별번호' },
  { field: 'memberNickname', headerName: '닉네임' },
  { field: 'bookmarkCount', headerName: '북마크 수' },
];

export default function APage() {
  return <CustomDataGrid fetchApi={membersBookmarkApi} columns={columns} />;
}
