'use client';

import { membersPendingStudentImage } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';

const columns = [
  { field: 'memberVerifyId', headerName: '식별번호' },
  { field: 'memberId', headerName: '교유번호' },
  { field: 'name', headerName: '이름' },
  { field: 'schoolName', headerName: '학교이름' },
  { field: 'birthDate', headerName: '생년월일' },
  { field: 'gender', headerName: '성별' },
  { field: 'studentIdImageUrl', headerName: '학생증 이미지' },
  { field: 'createdAt', headerName: '등록시간' },
];

export default function CPage() {
  return (
    <CustomDataGrid
      fetchApi={membersPendingStudentImage}
      columns={columns}
      config={{
        modalField: 'studentIdImageUrl',
        pageName: 'three-idiots-student',
      }}
    />
  );
}
