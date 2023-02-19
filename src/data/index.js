import LiveTv from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SettingsIcon from '@mui/icons-material/Settings';
import Unpetit from '/Users/hank/Documents/SoloDolo/Hermes/src/assets/Movies/UnPetit.jpg'
import Amelie from '/Users/hank/Documents/SoloDolo/Hermes/src/assets/Movies/Amelie.webp'
import Intouchables from '/Users/hank/Documents/SoloDolo/Hermes/src/assets/Movies/Intochables.jpg'
import Monfrere from '/Users/hank/Documents/SoloDolo/Hermes/src/assets/Movies/MonFrere.jpg'
import leFeu from '/Users/hank/Documents/SoloDolo/Hermes/src/assets/Movies/LeFeu.webp'


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


const MoviesList = [
    {
        index: 0,
        title: 'Amelie',
        image: Amelie
    },
    {
        index: 1,
        title: 'Mon Frére',
        image: Monfrere
    },
    {
        index: 2,
        title: 'Le Feu Follet',
        image: leFeu
    },
    {
        index: 3,
        title: 'Un Petit Frére',
        image: Unpetit
    },
    {
        index: 4,
        title: 'The Intouchables',
        image: Intouchables
    }

]

export {
    Nav_Buttons,
    Settings_Button,
    MoviesList
}