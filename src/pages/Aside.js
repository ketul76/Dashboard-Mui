import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AppsIcon from '@mui/icons-material/Apps';
import PortraitIcon from '@mui/icons-material/Portrait';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider, Paper } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Box } from '@mui/system';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';

function Aside() {
  return (
    <>
      <Box>
        <div className='headerMenu'>
          <MenuIcon/>
        </div>
      <Hidden only="xs">
      <Drawer className='mainasideMenu' variant='permanent' anchor='left' >
        <div className='asideMenu' >
          <img src='profile.png' />
          <Typography textAlign="center" variant='h5'>Roman Kutepov</Typography>
          <Typography textAlign="center" variant='body2'>Brain Director</Typography>
          <List >
            <ListItem >
              <DashboardIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Dashboard</ListItemText>
            </ListItem>
            <ListItem>
              <PeopleAltIcon /><ListItemText className='navlist'  sx={{ paddingLeft: "10px" }}>Users</ListItemText>
            </ListItem>
            <ListItem>
              <ShoppingBasketIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Products</ListItemText>
            </ListItem>
            <ListItem>
              <LockOpenIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Authentication</ListItemText>
            </ListItem>
            <ListItem>
              <TextFieldsIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Typography</ListItemText>
            </ListItem>
            <ListItem>
              <AppsIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Icons and Images</ListItemText>
            </ListItem>
            <ListItem>
              <PortraitIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Account</ListItemText>
            </ListItem>
            <ListItem>
              <SettingsIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Settings</ListItemText>
            </ListItem>
            <Divider />
            <ListItemText className='navlist' sx={{ paddingLeft: "15px" }}>Support</ListItemText>
            <ListItem>
              <InfoRoundedIcon /><ListItemText className='navlist' sx={{ paddingLeft: "10px" }}>Customer Support</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      </Hidden>
      </Box>
    </>
  )
}

export default Aside;