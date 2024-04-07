import { ThemeProvider } from "@emotion/react";
import "../index.css";
import {
        createTheme, Typography,
} from "@mui/material";
import React from 'react'

const LayoutHeading = () => {
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

                <ThemeProvider theme={fontTheme}>
                    <Typography variant="h4" color="blue">
                        Hotel Validation UI
                    </Typography>
                    <Typography variant="h6" color="green" gutterBottom>
                        Manual Mapping and Validation Tool
                    </Typography>
                </ThemeProvider>
        </>
    );
}

export default LayoutHeading