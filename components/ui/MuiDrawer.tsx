import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BallotIcon from '@mui/icons-material/Ballot';
import {
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Drawer as MuiDrawer
} from '@mui/material';

interface MuiDrawerProps {
    open: boolean;
    width: number;
};

interface IProps {
    open: boolean;
    toggleDrawer: () => void;
    width: number;
};

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<MuiDrawerProps>(
    ({ theme, open, width }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: width,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


const MuiCustomDrawer = (props: IProps) => {
    const { open, width, toggleDrawer } = props
    return (
        <>
            <Drawer variant="permanent" open={open} width={width}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <ListItemButton selected>
                        <ListItemIcon>
                            <BallotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tasks" />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    )
}

export default MuiCustomDrawer;