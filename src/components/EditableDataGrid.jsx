import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from 'axios'

const EditableDataGrid = ( {data} ) => {
  const [selectedRows, setSelectedRows] = useState([]);

   const handleSaveChanges = async (newRow) => {
    console.log(newRow['ind']);
    try {
      await axios.put('http://127.0.0.1:8000/api/update', newRow);
      alert('Sucessfully changed');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Error saving changes. Please try again.');
    }
  };

    const handleRowSelection = (selectionRowsId) =>{
         selectionRowsId.rowsId
    }

    const HotelSearchColumn = [
        {
            field: "ind",
            headerName: "ID",
            width: "50",
            Cell: ({ value }) => <span>{value + 1}</span>,
            headerClassName:'custom-header'
        },
        { field: "unique_id", headerName: "Unique ID", width: "80",editable:true , headerClassName:'custom-header'},
        { field: "name", headerName: "Hotel Name", width: "170",headerClassName:'custom-header' },
        { field: "address", headerName: "Address", width: "200", headerClassName:'custom-header' },
        { field: "latitude", headerName: "Latitude", width: "100", headerClassName:'custom-header' },
        { field: "longitude", headerName: "Longitude", width: "100", headerClassName:'custom-header' },
        {
            field: "unique_supplier_id",
            headerName: "Unique Supplier ID",
            width: "150",
            headerClassName:'custom-header'
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
        processRowUpdate={(newRow)=>{handleSaveChanges(newRow)}}
        onRowSelectionModelChange={handleRowSelection}
      />
    </>
  );
};

export default EditableDataGrid;