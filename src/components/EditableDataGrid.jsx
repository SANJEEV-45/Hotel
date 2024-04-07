import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const EditableDataGrid = ( {data, stateFromEditTable} ) => {

    const [editedRows, setEditedRows] = useState([]);

    const handleEdit = (updatedRows) =>{
        setEditedRows(updatedRows)
        stateFromEditTable(editedRows);
    }

    useEffect(()=>{
       stateFromEditTable(editedRows);
    },[])

    const HotelSearchColumn = [
        {
            field: "ind",
            headerName: "ID",
            width: "50",
            Cell: ({ value }) => <span>{value + 1}</span>,
        },
        { field: "unique_id", headerName: "Unique ID", width: "80",editable:true },
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
      <DataGrid
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "blue",
            color: "white",
          },
        }}
        getRowId={(users) => users.ind}
        columns={HotelSearchColumn}
        rows={data.map((user) => ({ ...user, ind: user.ind + 1 }))}
        pageSize={10}
        checkboxSelection
        disableRowSelectionOnClick
        pageSizeOptions={[]}
        autoPageSize
        onEdit
       
      />
    </>
  );
};

export default EditableDataGrid;
