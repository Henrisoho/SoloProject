
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { Box, Typography, useTheme } from '@mui/material';

export default function TransWord({ transWord }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <div>
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
                backgroundColor={colors.primary[400]}
            >{transWord}</Typography>
        </div>
    )
}

