import LiveTv from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SettingsIcon from '@mui/icons-material/Settings';


const Nav_Buttons = [
  {
    index: 0,
    icon: <HomeIcon fontSize="large"/>,
    path: "/user"
  },
  {
    index: 1,
    icon: <LocalMoviesIcon fontSize="large"/>,
    path: "/movie"
  },
  {
    index: 2,
    icon: <TaskIcon fontSize="large"/>,
    path: "/complete"
  },
];

const Settings_Button = [
    {
        index: 0,
    icon: <SettingsIcon fontSize="large"/>,
    path: "/settings"
    }
]

export {
    Nav_Buttons,
    Settings_Button
}