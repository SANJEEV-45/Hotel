import React from "react";
import { DataGrid } from "@mui/x-data-grid";



const DataGridComponent = ( {data, totalPages} ) => {
    console.log(data);
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
            <DataGrid
                getRowId={(data) => data.ind}
                columns={HotelSearchColumn}
                rows={data}
                headerClassName="custom-header-class"
                initialState={{
                    pagination: { paginationModel: { pageSize: 7} },
                }}
                disableRowSelectionOnClick
                rowCount={totalPages * 7} 
            />
        </>
    );
};

export default DataGridComponent;