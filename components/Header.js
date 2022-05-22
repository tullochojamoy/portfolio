import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/'>
              <a style={{ color: 'white' }}>JAMOY TULLOCH</a>
            </Link>
          </Typography>
          <Typography color='inherit'>
            <Link href='/'>
              <a style={{ color: 'white', padding: '0 10px' }}>HOME</a>
            </Link>
          </Typography>
          <Typography color='inherit'>
            <Link href='/about'>
              <a style={{ color: 'white', padding: '0 10px' }}>ABOUT</a>
            </Link>
          </Typography>
          <Typography color='inherit'>
            <Link href='/resume'>
              <a style={{ color: 'white', padding: '0 10px' }}>RESUME</a>
            </Link>
          </Typography>
          <Typography color='inherit'>
            <Link href='/contact'>
              <a style={{ color: 'white', padding: '0 10px' }}>CONTACT</a>
            </Link>
          </Typography>
          <Typography
            color='inherit'
            title='LinkedIn'
            target='_blank'
            rel='noreferrer'
            href={{ pathname: 'http://linkedin.com/in/jamoytulloch' }}
          >
            <LinkedInIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
