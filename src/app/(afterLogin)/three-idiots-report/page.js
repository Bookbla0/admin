'use client';

import { membersReportApi, membersReportUpdateApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';
import useProfileStatusStore from '@/store/profileStatus/profileStatus';
import { useEffect, useState } from 'react';

export default function APage() {
  const profileStatus = useProfileStatusStore((state) => state.profileStatus);
  const [status, setStatus] = useState('');
  const [isStatus, setIsStatus] = useState(-1);

  useEffect(() => {
    setStatus(profileStatus?.authUrl?.[0] ?? '');
  }, [profileStatus]);

  console.log('profileSTatus', profileStatus);
  const onClickReportUpdate = async (memberReportId) => {
    console.log('status: {}', status);
    if (!status) return alert('상태값이 비어있어요');
    if (!window.confirm(`${memberReportId}의 상태를 ${status}로 변경하시겠습니까?`)) return;

    try {
      const res = await membersReportUpdateApi({
        status,
        memberReportId,
      });
      console.log('membersReportUpdateApi: {}', res);
      alert('성공했어요');
    } catch (err) {
      console.log('err: {}', err);
    } finally {
      setStatus(profileStatus?.authUrl?.[0] ?? '');
      setIsStatus(-1);
    }
    console.log('membersReportUpdateApi Res: {}', res);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const columns = [
    { field: 'memberReportId', headerName: '식별번호' },
    { field: 'reportAt', headerName: '신고일' },
    { field: 'reporterMemberId', headerName: '신고한 회원 아이디' },
    { field: 'reportedMemberId', headerName: '신고당한 회원 아이디' },
    {
      field: 'reportStatuses',
      headerName: '신고 상태',
      renderCell: (params) => {
        const statuses = params.value;
        return (
          <div style={{ whiteSpace: 'pre-line' }}>
            {Object.entries(statuses).map(([key, value]) => {
              const koLabels = {
                isNicknameReported: '닉네임',
                isBookQuizReported: '독서 퀴즈',
                isReviewReported: '한 줄 감상문',
                isConversationReported: '불쾌한 대화',
                isProposalReported: '부적절한 만남',
                isOtherReported: '기타',
              };
              return `${koLabels[key]}:${value ? 'O' : 'X'}, `;
            })}
          </div>
        );
      },
      width: 500,
    },
    { field: 'reportContents', headerName: '신고 내용' },
    {
      field: 'reportStatus',
      headerName: '신고 상태',
      renderCell: (params) => {
        return (
          <>
            {isStatus === params.row.memberReportId ? (
              <select value={status} onChange={onChangeStatus}>
                {profileStatus.authUrl?.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            ) : (
              <button onClick={() => setIsStatus(params.row.memberReportId)}>편집</button>
            )}
          </>
        );
      },
    },
    {
      field: 'action',
      headerName: '액션',
      renderCell: (params) => {
        return (
          isStatus === params.row.memberReportId && (
            <div>
              <button onClick={() => onClickReportUpdate(params.row.memberReportId)}>적용</button>
              <button onClick={() => setIsStatus(-1)}>취소</button>
            </div>
          )
        );
      },
    },
  ];

  return <CustomDataGrid fetchApi={membersReportApi} columns={columns} />;
}
