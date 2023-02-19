import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {Box, IconButton, Typography} from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from '@mui/system';
import { ColorModeContext, tokens } from "../App/theme"
import { useContext, useState } from "react"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { faker } from '@faker-js/faker';
import {Divider} from '@mui/material';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
      
    </MenuItem>
  );
};

const SideBar = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
   const [selected, setSelected] = useState("Dashboard");
   const [isCollapsed, setIsCollapsed] = useState(false);
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  const onCollapse = () =>{
    setIsCollapsed(!isCollapsed)
    collapseSidebar()
  }

  return (
    <Box 
      sx={{display:'flex', height: 1}}
      display= 'flex'
      height=  '100%'
      color = {colors.primary[400]}
      m="0"
      >
      <Sidebar
        collapsed={isCollapsed}
        defaultCollapsed collapsedWidth="70px"
        width="170px"
        alignItems='center'
        backgroundColor = {colors.primary[400]}
      >
        <Menu
        backgroundColor = {colors.primary[400]}
        >
          <MenuItem
            onClick={onCollapse}
            icon={!isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography 
                variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  ORDO
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={faker.image.avatar()}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Henri
                </Typography>
              </Box>
            </Box>
          )}

          <Item
              title="Home"
              to="/user"
              icon={<HomeOutlinedIcon fontSize="medium" />}
              selected={selected}
              setSelected={setSelected}
            />

             <Item
              title="Movie"
              to="/movie"
              icon={<SlideshowOutlinedIcon fontSize="medium" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Complete"
              to="/complete"
              icon={<TaskOutlinedIcon fontSize="medium" />}
              selected={selected}
              setSelected={setSelected}
            />

            {isCollapsed && (<Divider sx={{ width: "80%", alignItems: 'center', marginTop: '5px', marginBottom: '5px', color: colors.grey[100]}} variant="middle" />
            )}

            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsOutlinedIcon fontSize="medium" />}
              selected={selected}
              setSelected={setSelected}
            />
        </Menu>
      </Sidebar>
      
    </Box>
  );

}

export default SideBar