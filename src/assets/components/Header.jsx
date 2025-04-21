import { useState } from 'react'
// Прямой импорт каждого компонента вместо деструктуризации
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {DrawerContainer} from './DrawerContainer';
import { NavbarWrapper } from '../styles/Styles.modules';


export const menuItems = [
    { name: 'Etusivu', link: '#video' },
    { name: 'Meistä', link: '#about' },
    { name: 'Palvelut', link: '#services' },
    { name: 'Kuvat', link: '#gallery' },
    { name: 'Ota Yhteyttä', link: '#contact-info' }
];

const Header = () => {
    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"));
    const [activeTab, setActiveTab] = useState(0);
    
    const handleScroll = (event, link, index) => {
        event.preventDefault();
        try {
            const targetSection = document.querySelector(link);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                setActiveTab(index); // Set the active tab index
            }
        } catch (error) {
            console.error("Error in handleScroll:", error);
        }
    };
    
    return (
        <div>
            <NavbarWrapper>
                <AppBar sx={{padding:"5px",backgroundColor:"#004085"}}>
                    <Toolbar>
                        <Typography className='logo'>  
                            <img className='logo-img' src="avatar.jpg" alt="Logo" /> 
                        </Typography>
                        
                        {isMatching ? (
                            // Теперь передаем activeTab и setActiveTab в DrawerContainer
                            <DrawerContainer activeTab={activeTab} setActiveTab={setActiveTab} />
                        ) : (
                            <>
                                <Tabs sx={{
                                    marginLeft:'auto',
                                    '.MuiTabs-indicator': {
                                        backgroundColor: '#f9b57a', 
                                    }
                                }}
                                textColor='inherit'
                                value={activeTab} // Bind value to activeTab 
                                >
                                    {menuItems.map((menuItem, index) => (
                                        <Tab 
                                            key={index} 
                                            label={menuItem.name}
                                            href={menuItem.link}
                                            onClick={(event) => handleScroll(event, menuItem.link, index)}
                                        />
                                    ))}
                                </Tabs>
                            </>
                        )}
                        
                    </Toolbar>
                </AppBar>
            </NavbarWrapper>
        </div>
    )
}

export default Header