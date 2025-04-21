import React from 'react';
// Прямые импорты вместо деструктуризации
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from './Header';
import PropTypes from 'prop-types';

export const DrawerContainer = ({ activeTab = 0, setActiveTab = () => {} }) => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const drawerBtn = () => {
        setOpenDrawer(!openDrawer);
    };

    const CustomDrawer = styled(Drawer)`
        .MuiDrawer-paper {
            background: #004085; /* Drawer background in light sand */
            color: whitesmoke;
           
            transition: all 0.3s ease-in-out; 
        }
    `;
    const CustomListItemButton = styled(ListItemButton)`
        color: whitesmoke ! important; /* Same as the header link color */
        &:hover {
            background-color: #f9b57a; /* Hover color same as underline */
        }
    `;

    const handleScroll = (event, link, index) => {
        event.preventDefault();
        try {
            const targetSection = document.querySelector(link);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                if (typeof setActiveTab === 'function') {
                    setActiveTab(index); // Set the active tab index
                }
                setOpenDrawer(false); // Close the drawer
            }
        } catch (error) {
            console.error("Error in handleScroll:", error);
            setOpenDrawer(false); // Make sure to close drawer even if error occurs
        }
    };

    return (
        <>
            <CustomDrawer open={openDrawer} onClose={drawerBtn} anchor="left">
                <List>
                    {menuItems.map((nav, index) => (
                        <CustomListItemButton
                            key={index}
                            onClick={(event) => handleScroll(event, nav.link, index)} // Trigger smooth scroll
                        >
                            <ListItemText>
                                {nav.name}
                            </ListItemText>
                        </CustomListItemButton>
                    ))}
                </List>
            </CustomDrawer>
            <IconButton onClick={drawerBtn} sx={{ marginLeft: "auto", color: "whitesmoke" }}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

DrawerContainer.propTypes = {
    activeTab: PropTypes.number, // Made optional with default value
    setActiveTab: PropTypes.func, // Made optional with default value
};