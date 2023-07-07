"use client"

import * as React from 'react';
import { styled, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SensorWindowIcon from '@mui/icons-material/SensorWindow';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ForumIcon from '@mui/icons-material/Forum';
import PortraitIcon from '@mui/icons-material/Portrait';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CategoryIcon from '@mui/icons-material/Category';
import  { useRouter } from 'next/navigation';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';
import Link from 'next/link';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  className:'transition-all duration-300',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const listItems =[
  {
    text: "Home",
    url: "/",
    icon: <HomeIcon />
  },
  {
    text: "Jobs",
    url: "/search",
    icon: <WorkIcon />
  },
  {text:"Blogs",
url:"/blog",icon:<SensorWindowIcon/>},
  {
    text: "Resources",
    url: "/resources",
    icon: <CategoryIcon />
  },
  // {
  //   text: "Recruitment",
  //   url: "/recruitment",
  //   icon: <HandshakeIcon />
  // },
  {
    text: "Training Programs",
    url: "/training-programs",
    icon: <InboxIcon />
  },
  // {
  //   text: "Referral",
  //   url: "/referral",
  //   icon: <MailIcon />
  // },
  {
    text: "Scan Your Resume",
    url: "/scan-resume",
    icon: <DocumentScannerIcon />
  },
  {
    text: "About Us",
    url: "/about-us",
    icon: <ForumIcon />
  },

  
];


const Mobilenav=()=>{
  const [open,setOpen]=React.useState(true);

  const [selectedItem, setSelectedItem] = React.useState("Home"); 

  const handleListItemClick = (url, itemText) => {
    setSelectedItem(itemText); 
    // navigate(url);
  };
  return(
    <div className='z-10 flex md:justify-around  w-[100vw] fixed bottom-0  overflow-auto '>
<div className='flex items-center '>

{listItems.map((item, i) => (
                <Link key={i} href={item.url}>
                <ListItem disablePadding sx={{ display: 'block' }} key={i}>
                  <div className="tooltip" data-tip={item.text}>
                     <ListItemButton
                    onClick={() => handleListItemClick(item.url, item.text)} 
                    sx={{
                      minHeight: 48,
                      backgroundColor: selectedItem === item.text && open ? 'rgba(0, 0, 0, 0.1)' : 'transparent', 
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        justifyContent: 'center',
                      }}
                      className='bg-white rounded-full'
                    >
                      {open ? item.icon : <item.icon.type />}
                    </ListItemIcon>
                  </ListItemButton>
                  </div>
                </ListItem>
                </Link>
              ))}
    </div>
    </div>
  )
}


function Sidenav() {

  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("Home"); 
  const router=useRouter()

  const customTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: red[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

  

  const handleListItemClick = (url, itemText) => {
    setSelectedItem(itemText); 
    // navigate(url);
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>

        <Box className='' sx={{ display: 'flex' }}>
          <CssBaseline />
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={() => setOpen(!open)}>
                {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <List>
              {listItems.map((item, i) => (
              <Link key={i} href={item.url}>
                <ListItem disablePadding sx={{ display: 'block' }} key={i}>
                  <ListItemButton
                    onClick={() => handleListItemClick(item.url, item.text)} 
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      backgroundColor: selectedItem === item.text && open ? 'rgba(0, 0, 0, 0.1)' : 'transparent', 
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {open ? item.icon : <item.icon.type />}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.text} />}
                  </ListItemButton>
                </ListItem>
                </Link>
              ))}


              <br></br>
              <br></br>
              <Divider />
              <br></br>
              
              <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => router.push('/profile')} 
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      backgroundColor: selectedItem === "Profile" && open ? 'rgba(0, 0, 0, 0.1)' : 'transparent', 
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {open ? <PortraitIcon /> : <PortraitIcon />}
                    </ListItemIcon>
                    {open && <ListItemText primary="Profile" />}
                  </ListItemButton>
                </ListItem>

            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
}



export default function Nav(){
  return (
    <>
    <div className='hidden md:block'><Sidenav/></div>
    <div className='block md:hidden'><Mobilenav/></div>
    </>
  )
}
