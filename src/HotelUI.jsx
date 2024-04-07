import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {
    Button,
    Stack,
    TextField,
    Container,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    ThemeProvider,
    createTheme,
    Pagination,

} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Map from './Map'

const HotelUI = () => {
    const [Datas, setDatas] = useState([])
    const [fields, setFields] = useState([]);
    const [filter, setFilter] = useState("none");
    const [totalPages, setTotalPages] = useState(14286);
    const [pageApi, setPageApi] = useState(1);


    //Hitting API
    const handleSearch = async () => {
        //Fetching values of Grid Numbers and UNique Ids
        await axios.post('http://127.0.0.1:8000/api/filter',fields)
        .then((response) => {
                setDatas(response.data.data.data);
                setTotalPages(response.data.data.pages);
            })
            .catch((error) => {
                console.error(error);
                console.log("from error");
            });
    };

    useEffect(()=>{
        handleSearch();
    },[fields])

    const handleFields = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFields((values)=>({...values,[name]:value}));
    }
    
    const HotelSearchColumn = [
        { field: "ind", headerName: "ID", width: "50", Cell:({value})=><span>{value + 1}</span>},
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

  const Datas1=[
    {
      unique_id:'1567728'
    },
    {
      unique_id:'1567724'
    },
    {
      unique_id:'1567723'
    },
    {
      unique_id:'15677282'
    },
    {
      unique_id:'15677285'
    },
    {
      unique_id:'1567727'
    },
    {
      unique_id:'15677245'
    },
    {
      unique_id:'15677245'
    },
    {
      unique_id:'15677221'
    },
    {
      unique_id:'15677238'
    },
    {
      unique_id:'15637728'
    },
  ]
    const fontTheme = createTheme();
    fontTheme.typography.h4 = {
        "@media (min-width:600px)": {
            fontSize: "1.5rem",
        },
        "@media (min-width:800px)": {
            fontSize: "2rem",
        },
    };
    fontTheme.typography.h6 = {
        "@media (min-width:600px)": {
            fontSize: "1.5rem",
        },
        "@media (min-width:800px)": {
            fontSize: "2rem",
        },
    };
    return (
        <>
            <Container
                maxWidth="xl"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ThemeProvider theme={fontTheme}>
                    <Typography variant="h4" color="blue">
                        Hotel Validation UI
                    </Typography>
                    <Typography variant="h6" color="green" gutterBottom>
                        Manual Mapping and Validation Tool
                    </Typography>
                </ThemeProvider>
                <Stack
                    flexDirection={"row"}
                    marginTop={5}
                    gap={4}
                    flexWrap={"wrap"}
                    maxWidth={"90%"}
                >
                    <TextField 
                       label="Country"
                       name="country_name"
                       onChange={handleFields}
                    />
                    <TextField 
                       label="City"
                       name="city"
                       onChange={handleFields}
                    />
                    <TextField 
                       label="grid number"
                       name="grid_number"
                       onChange={handleFields}
                    />
                    <TextField 
                       label="Unique id"
                       name="unique_id"
                       onChange={handleFields}
                    />
                    <TextField 
                       label="hotel Name"
                       name="name"
                       onChange={handleFields}
                    />
                    <Button
                        onClick={handleSearch}
                        variant="contained"
                        size="large"
                        sx={{ width: "8rem", height: "2.7rem" }}
                    >
                        Search
                    </Button>
                    <FormControl>
                        <InputLabel>Filter</InputLabel>
                        <Select
                            id="demo-simple-select-autowidth"
                            value={filter}
                            style={{ minWidth: "10rem", borderRadius: "3rem" }}
                            label="Filter"
                            name="validation"
                        >
                            <MenuItem value={"none"}>None</MenuItem>
                            <MenuItem value={"Id duplication"}>
                                ID Duplication
                            </MenuItem>
                            <MenuItem value={"Id accumulation"}>
                                ID Accumulation
                            </MenuItem>
                            <MenuItem value={"Need Validation 1"}>
                                Need Validation 1
                            </MenuItem>
                            <MenuItem value={"Need Validation 2"}>
                                Need Validation 2
                            </MenuItem>
                            <MenuItem value={"Unmapped"}>Not Mapped</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Stack
                    flexDirection={"row"}
                    gap={8}
                    justifyContent={"space-around"}
                    flexWrap={"wrap-reverse"}
                >
                    <Typography variant="h6" color="initial">
                        Result Table
                    </Typography>
                    <Typography variant="h6" color="initial" gutterBottom>
                        Records found
                    </Typography>
                </Stack>
                <Grid
                    container
                    maxWidth={"95%"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                >
                    <Grid item xs={7.5}>
                        <DataGrid
                            getRowId={(Datas)=> Datas.unique_id}
                            columns={HotelSearchColumn}
                            rows={Datas}
                            headerClassName="custom-header-class"
                            initialState={{
                                pagination: { paginationModel: { pageSize: 5 } },
                              }}
                            pageSizeOptions={[2,5]}
                            disableRowSelectionOnClick
                           rowCount={totalPages*7}
                        />
                        
                    </Grid>
                    <Grid item xs={4}>
                        <Map/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default HotelUI;