import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";

import React from "react";

const BaseDataTable = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "blue",
      color: "white",
      border: "1px solid hsl(0,0%,80%)",
      borderTopStyle: "none",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const HotelSearchColumn = [
    {
        field: "ind",
        headerName: "ID",
        width: "50",
        Cell: ({ value }) => <span>{value + 1}</span>,
    },
    { field: "unique_id", headerName: "Unique ID", width: "80" },
    { field: "name", headerName: "Hotel Name", width: "170" },
    { field: "address", headerName: "Address", width: "200" },
    { field: "latitude", headerName: "Latitude", width: "100" },
    { field: "longitude", headerName: "Longitude", width: "100" },
    {
        field: "unique_supplier_id",
        headerName: "Unique Supplier ID",
        width: "150",
    },
];

  return (
    <>
      <TableContainer
        style={{
          overflowX: "auto",
          border: "1px solid hsl(0,0%,80%)",
          borderRadius: "10px",
          borderLeftStyle: "none",
          borderRightStyle: "none",
        }}
      >
        <Table
          sx={{
            minWidth: 600,
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow style={{ minHeight: "5px", height: "10px" }}>
              {HotelSearchColumn.map((column) => (
                <StyledTableCell className="tableRow">
                  {column.headerName}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {HotelSearchColumn.map((column) => (
                <TableCell
                  style={{
                    border: "1px solid hsl(0,0%,80%)",
                    borderBottomStyle: "none",
                  }}
                ></TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BaseDataTable;
