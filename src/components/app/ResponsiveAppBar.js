import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = ['Home', 'News'];

function ResponsiveAppBar({ onNavigate }) {
    const isMobile = useMediaQuery('(max-width:500px)');

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ flexDirection: isMobile ? 'column' : 'row' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1,
                            justifyContent: 'center',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => onNavigate(page)}
                                sx={{ mx: 2, color: 'white' }}
                            >
                                {page}
                            </Button>
                        ))}
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={false}
                            onClose={() => {}}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => onNavigate(page)}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
