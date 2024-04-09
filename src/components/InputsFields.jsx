import React, { useState,useEffect } from "react";
import "../index.css";
import {
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";

const InputFields = ({ StatefromInput }) => {
    const [fields, setFields] = useState([]);
    const [filter, setFilter] = useState('');
   
    const handleFields = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields((values) => ({ ...values, [name]: value }));
    };
    const handleFilter = (e) =>{
        handleFields(e);
        setFilter(e.target.value);
        console.log(fields);
    }

    return (
        <>
            <TextField
                label="Country"
                name="country_name"
                onChange={handleFields}
                style={{ width: "12rem" }}
                InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
            />

            <TextField
                label="City"
                name="city"
                style={{ width: "12rem" }}
                InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
                onChange={handleFields}
            />
            <TextField
                label="Grid number"
                name="grid_number"
                style={{ width: "12rem" }}
                InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
                onChange={handleFields}
            />
            <TextField
                label="Unique id"
                name="unique_id"
                style={{ width: "12rem" }}
                InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
                onChange={handleFields}
            />
            <TextField
                label="Hotel Name"
                name="name"
                style={{ width: "12rem" }}
                InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
                onChange={handleFields}
            />
            <Button
                onClick={()=>StatefromInput(fields)}
                variant="contained"
                size="large"
                sx={{ width: "8rem", height: "3.3rem" }}
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
                    onChange={handleFilter}
                >
                    <MenuItem value={''}>None</MenuItem>
                    <MenuItem value={"Id duplication"}>ID Duplication</MenuItem>
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
        </>
    );
}

export default InputFields