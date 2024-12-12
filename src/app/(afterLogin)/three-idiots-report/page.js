'use client';

import { membersReportApi, membersReportUpdateApi } from '@/api/member/member.api';
import CustomDataGrid from '../_components/dataGrids/customDataGrid/CustomDataGrid';
import useProfileStatusStore from '@/store/profileStatus/profileStatus';

export default function APage() {
  const profileStatus = useProfileStatusStore((state) => state.profileStatus);


  const onClickReportUpdate = async (memberReportId) => {
    try {
      const res = await membersReportUpdateApi(memberReportId, {
        status: '',
        memberReportId,
      });
    } catch (err) {
      console.log('err: {}', err);
    }
    console.log('membersReportUpdateApi Res: {}', res);
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
              const koreanLabels = {
                isNicknameReported: '닉네임',
                isBookQuizReported: '독서 퀴즈',
                isReviewReported: '한 줄 감상문',
                isConversationReported: '불쾌한 대화',
                isProposalReported: '부적절한 만남',
                isOtherReported: '기타',
              };
              return `${koreanLabels[key]}: ${value ? 'O' : 'X'}`;
            })}
          </div>
        );
      },
      width: 500,
    },
    { field: 'reportContents', headerName: '신고 내용' },
    {
      field: 'action',
      headerName: '액션',
      renderCell: (params) => {
        console.log('params: {}', params);
        return <button onClick={() => onClickReportUpdate(params.row.memberReportId)}>적용</button>;
      },
    },
  ];

  return <CustomDataGrid fetchApi={membersReportApi} columns={columns} />;
}
