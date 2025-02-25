"use client"

import React, { useState } from "react";
import { Box } from '@mui/material';

const SideBar = () => {


  return (
    <>
        <Box sx={{ display: 'flex',
                    height: '100%',
                    width: '300px',
                    marginRight: '1em',
                    backgroundColor: 'red',
        }}>
            <p> Will be sidebar </p>
      
        </Box>
    </>
  );
};

export default SideBar;
