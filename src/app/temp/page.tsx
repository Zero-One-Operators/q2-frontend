"use client";

import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Temp() {
    
    const [count, setCounter] = useState(0);

    return (
        <Container>
            <Typography variant="h1">
                Counter: { count }
            </Typography>

            <Button
                    onClick={() => { setCounter(count + 1)}}
                    variant="contained"
                    aria-label="increment"
            >
                Increment
            </Button>
        </Container>
    );
}