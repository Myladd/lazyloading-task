import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import ChangeTheme from '../components/ChangeTheme';
// import yekan from "@assets/fonts/Yekan.ttf"

export default function ProductsLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "burlywood" ,color: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'yekan' }}>
            محصولات
          </Typography>
          <ChangeTheme/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}