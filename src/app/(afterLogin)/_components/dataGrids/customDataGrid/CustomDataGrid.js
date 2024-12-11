'use client';

import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Pagination01 from '../../paginations/pagination01/Pagination01';
import { useRouter } from 'next/navigation';
import useMemberStore from '@/store/member.js/member';

const CustomDataGrid = ({ fetchApi, columns, config }) => {
  const { modalField, pageName } = config ?? {};
  console.log('modalField', modalField);
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const router = useRouter();
  const setMember = useMemberStore((state) => state.setMember);

  useEffect(() => {
    const getData = async () => {
      const { result } = await fetchApi(page);
      setUsersData(result.data ?? result.datas);
      setTotalCount(result.totalCount);
    };
    getData();
  }, [page]);

  const handleCellClick = (params) => {
    if (modalField.includes(params.field)) {
      const { memberId } = params.row;
      setMember({ ...params.row, field: params.field });
      router.push(`/${pageName}/image/${memberId}`);
    }
  };

  return (
    <>
      <DataGrid
        rows={usersData}
        columns={columns}
        pagination={false}
        getRowId={(row) => row.memberId}
        onCellClick={handleCellClick}
      />
      <Pagination01 setPage={setPage} page={page} totalCount={totalCount} />
    </>
  );
};

export default CustomDataGrid;
