import { Box, IconButton, useTheme, Typography } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../App/theme"
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box 
        display='flex' 
        justifyContent='space-between'
        p={2}
        
        backgroundColor = {colors.primary[400]}
        >

            <Box
                display='flex'
                borderRadius='3px'
            >
                <Typography
                variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >ORDO</Typography>
            </Box>

            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                    ): (
                    <LightModeOutlinedIcon />
                    )}
                    
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar