"use client";

import React, { useState } from 'react';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';

import MuiCustomAppBar from '@/components/ui/MuiAppBar';
import MuiCustomDrawer from '@/components/ui/MuiDrawer';

interface IProps {
    children: React.ReactNode;
}

const drawerWidth: number = 240;

const DashboardLayout = ({ children }: IProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MuiCustomAppBar
                open={open}
                width={drawerWidth}
                title='Task Management Tool'
                toggleDrawer={toggleDrawer}
            />

            <MuiCustomDrawer
                open={open}
                width={drawerWidth}
                toggleDrawer={toggleDrawer}
            />

            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: '22px' }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
}

export default DashboardLayout