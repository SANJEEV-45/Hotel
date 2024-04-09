import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import '../index.css';


const DataGridComponent = ( {data, totalPages} ) => {
    console.log(data);
    const HotelSearchColumn = [
        {
            field: "ind",
            headerName: "ID",
            width: "50",
            Cell: ({ value }) => <span>{value + 1}</span>,
            headerClassName:'custom-header'
        },
        { field: "unique_id", headerName: "Unique ID", width: "80",headerClassName:'custom-header' },
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

    function getRowClassName(params) {
        return params.id % 2 === 0 ? 'even-row' : 'odd-row';
      }
    return (
        <div className="DataGridCell">
            <DataGrid
                getRowId={(data) => data.ind}
                columns={HotelSearchColumn}
                rows={data}
                getRowClassName={getRowClassName}
                headerClassName="custom-header-class"
                initialState={{
                    pagination: { paginationModel: { pageSize: 7} },
                }}
                disableRowSelectionOnClick
                rowCount={totalPages * 7} 
            />
        </div>
    );
};

export default DataGridComponent;