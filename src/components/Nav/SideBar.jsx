import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SettingsIcon from '@mui/icons-material/Settings';




const SideBar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <div
      onClick={() => collapseSidebar()}
      style={{ display: 'flex', height: '100%' }}>
      <Sidebar
        defaultCollapsed collapsedWidth="70px"
        width="170px"
        alignItems='center'
        backgroundColor='#FBFBF2'
      >
        <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#1f5673',
                backgroundColor: active ? '#F5D3C8' : undefined,
              };
          },
        }}
        >

          <MenuItem
            component={<Link to="/user" />}
            icon={<HomeIcon fontSize="medium" />}
          >
            Home
          </MenuItem>

          <MenuItem
            component={<Link to="/movie" />}
            icon={<LocalMoviesIcon fontSize="medium" />}
            active
          >
            Movie
          </MenuItem>

          <MenuItem
            component={<Link to="/complete" />}
            icon={<TaskIcon fontSize="medium" />}
          >
            Complete
          </MenuItem>

          <MenuItem
            component={<Link to="/settings" />}
            icon={<SettingsIcon fontSize="medium" />}
          >
            Settings
          </MenuItem>

        </Menu>
      </Sidebar>
    </div>
  );

}

export default SideBar