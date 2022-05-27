import React, { FC } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface PaginationControlProps {
  page: number;
  count: number;
  setPage: any;
}
const PaginationControl: FC<PaginationControlProps> = ({
  page,
  count,
  setPage,
}) => {
  const handleChange = (_: any, value: number) => {
    setPage(value);
    if (count < page) {
      setPage(1);
    }
  };

  return (
    <Stack spacing={2}>
      {!!count && (
        <Pagination count={count} page={page} onChange={handleChange} />
      )}
    </Stack>
  );
};

export default PaginationControl;
