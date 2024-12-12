'use client';

import { membersBookmarkApi, membersBookmarkUpdatePatchApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';
import { useState } from 'react';

export default function APage() {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [isBookmarkId, setIsBookmarkId] = useState(-1);

  const onClickCreateBookmarkCount = async (params) => {
    if (!bookmarkCount) return alert('값이 비어 있어요');

    if (!window.confirm(`${params.row.memberId}의 유저에게 ${bookmarkCount}만큼 올려주시겠습니까?`)) return;

    try {
      await membersBookmarkUpdatePatchApi({
        memberId: params.row.memberId,
        bookmarkCount,
      });
      alert('북마크 수 올리는데에 성공하였습니다.');
    } catch (error) {
      console.log('error: {}', error);
      alert('유저 북마크 수 올리는데에 실패하였습니다.');
    } finally {
      setBookmarkCount(0);
    }
  };

  const onChangeBookmarkCount = (e) => {
    console.log('e: {}', e.target.value);
    setBookmarkCount(e.target.value);
  };

  const columns = [
    { field: 'memberId', headerName: '멤버 아이디' },
    { field: 'memberBookmarkId', headerName: '북마크 식별번호' },
    { field: 'memberNickname', headerName: '닉네임' },
    { field: 'bookmarkCount', headerName: '북마크 수2' },
    {
      field: 'bookmarkCountInput',
      headerName: '올리고 싶은 북마크 수',
      renderCell: (params) => {
        return isBookmarkId === params.row.memberBookmarkId ? (
          <input onChange={onChangeBookmarkCount} />
        ) : (
          <button onClick={() => setIsBookmarkId(params.row.memberBookmarkId)}>편집</button>
        );
      },
    },
    {
      field: 'action',
      headerName: '액션',
      renderCell: (params) => {
        return (
          isBookmarkId === params.row.memberBookmarkId && (
            <>
              <button onClick={() => onClickCreateBookmarkCount(params)}>적용</button>
              <button onClick={() => setIsBookmarkId(-1)}>취소</button>
            </>
          )
        );
      },
    },
  ];

  return <CustomDataGrid fetchApi={membersBookmarkApi} columns={columns} />;
}
