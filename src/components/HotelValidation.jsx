import React, { useEffect, useState } from "react";
import "../index.css";
import LayoutHeading from "./LayoutHeading";
import InputFields from "./InputsFields";
import DataGridComponent from "./DataGridComponent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TableComponent from "./TableComponent";
import axios from "axios";
import { Box, Button, Pagination, Typography } from "@mui/material";
import ReferenceFields from "./ReferenceFields";
import BaseDataTable from "./BaseDataTable";
import EditableDataGrid from "./EditableDataGrid";


const HotelValidation = () => {
  const [datas, setDatas] = useState([]);
  const [dataCount, setDataCount] = useState('');
  const [fields, setFields] = useState([]);
  const [pageApi, setPageApi] = useState(1);
  const [totalPages, setTotalPages] = useState("");

  
  const inputField = (inputs) => {
    setFields(inputs);
  };


  //Hitting API
  const handleSearch = async () => {
    //Fetching values of Grid Numbers and UNique Ids
    await axios.post(`http://127.0.0.1:8000/api/filter?page=${pageApi}`, fields)
      .then((response) => {
        setDatas(response.data.data.data);
        setTotalPages(response.data.pages);
        setDataCount(response.data.count);
        console.log("Pages:",totalPages);
        console.log(dataCount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log("before home");
  useEffect(() => {
    handleSearch(pageApi);
  }, [pageApi, fields]);
  console.log("after home");

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
        <LayoutHeading />
        <Stack
          flexDirection={"row"}
          marginTop={5}
          gap={4}
          flexWrap={"wrap"}
          maxWidth={"90%"}
        >
          <InputFields StatefromInput={inputField} />
        </Stack>
        <Grid
          container
          maxWidth={"95%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Grid item xs={7.5} style={{maxHeight:'500px'}}>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}        
              flexWrap={"wrap-reverse"}
            >
              <TableComponent  dataCount={dataCount}  />
              
            </Stack>
            <DataGridComponent data={datas} totalPages={totalPages}/>
            <Pagination
              count={totalPages}
              onChange={(e, value) => setPageApi(value)}
              style={{marginTop:'-2.7rem'}}
              color="primary"
            />
          </Grid>
          <Grid item xs={4}>
                <Typography align="center" variant="h5" color="black" marginTop={1}>
                     Map View
                </Typography>
                
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "3rem" }} />
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="blue">
          Reference Search
        </Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          marginTop={3}
          gap={2}
          flexWrap={"wrap"}
          maxWidth={"66%"}
        >
          <ReferenceFields StateFromReference={inputField} />
        </Stack>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          mt={1}
        >
          <Grid item xs={6} width="50%" mt={3}>
            <BaseDataTable data={datas} />
          </Grid>
          <Grid item xs={8} height={500} mt={3}>
            <EditableDataGrid data={datas} />
            <Pagination
              count={totalPages}
              onChange={(e, value) => setPageApi(value)}
              style={{marginTop:'-2.7rem'}}
              color="primary"
            />
          </Grid>
          <Grid item xs={3.7}>
            <Box marginTop={"-2rem"} sx={{ height: "400px" }} >
                <Typography align="center" variant="h5" color="black" marginTop={1}>
                     Map View
                 </Typography>
            </Box>
            <Box
              mt={5}
              mb={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HotelValidation;