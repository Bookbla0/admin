'use client';

import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Pagination01 from '../../paginations/pagination01/Pagination01';

const CustomDataGrid = ({ fetchApi, columns, handleCellClick }) => {
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { result } = await fetchApi(page);
      setUsersData(result.data);
      setTotalCount(result.totalCount);
    };
    getData();
  }, [page]);

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
