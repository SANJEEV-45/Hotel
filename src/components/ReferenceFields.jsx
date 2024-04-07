import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ReferenceFields = ({ StateFromReference }) => {
    const [fields, setFields] = useState([]);

    useEffect(()=>{
        StateFromReference(fields);
    },[fields])
    
    const handleFields = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields((values) => ({ ...values, [name]: value }));
        StateFromReference(fields);
    };
    return (
        <>
           <TextField
            id="outlined-basic"
            label="Unique Id"
            variant="outlined"
            name="unique_id"
            InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
            onChange={handleFields}
          />
          <TextField
            id="outlined-basic"
            label="Supplier Id"
            variant="outlined"
            InputProps={{ style: { borderRadius: "3rem",backgroundColor:'#D2E3EA' } }}
            onChange={handleFields}
          />
        </>
    );
};

export default ReferenceFields;