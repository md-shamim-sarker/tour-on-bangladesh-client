import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AutoComplete, InputGroup} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import {Button} from 'rsuite';
import {DivisionContext} from '../contexts/UserContext';

// Drawer
import {Drawer, IconButton} from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu';

const styles = {
    width: 200,
};

const Header = () => {
    const {divisions} = useContext(DivisionContext);
    const divisionsArray = divisions.map(division => division.division_title);
    const data = divisionsArray;

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const size = 'full';

    const handleOpen = key => {
        setOpen(true);
        setPlacement(key);
    };

    return (
        <nav className='bg-gray-200 text-blue-700 py-2 text-lg px-3 lg:px-0'>
            <div className='w-full lg:w-4/5 mx-auto flex justify-between items-center'>
                <div className='flex gap-x-3'>
                    <h2 className='text-2xl font-bold'>
                        <NavLink to={"/"} className="hover:no-underline cursor-pointer">TOB</NavLink>
                    </h2>

                </div>
                <div className='hidden lg:flex gap-x-5'>
                    <NavLink to={"/divisions"}>Divisions</NavLink>
                    <NavLink to={"/places"}>Places</NavLink>
                    <NavLink to={"/hotels"}>Hotels</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                </div>
                <div className='flex gap-x-3'>
                    {/* Auto Complete Search Box */}
                    <InputGroup style={styles}>
                        <AutoComplete data={data} />
                        <InputGroup.Button tabIndex={-1}>
                            <SearchIcon />
                        </InputGroup.Button>
                    </InputGroup>
                    <div className='hidden lg:block'>
                        <Button className='w-24' appearance="primary">Login</Button>
                    </div>

                    {/* Drawer Start */}
                    <div className='lg:hidden'>
                        <IconButton icon={<MenuIcon />} onClick={() => handleOpen('right')}>
                        </IconButton>
                        <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
                            <Drawer.Header>
                                <Drawer.Title>
                                    <span className='text-xl font-bold text-blue-800'>
                                        <NavLink to={"/"} className="hover:no-underline cursor-pointer">Tour On Bangladesh</NavLink>
                                    </span>
                                </Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body>
                                <div className='lg:hidden flex flex-col gap-y-5'>
                                    <NavLink to={"/divisions"} onClose={() => setOpen(false)}>Divisions</NavLink>
                                    <NavLink to={"/places"}>Places</NavLink>
                                    <NavLink to={"/hotels"}>Hotels</NavLink>
                                    <NavLink to={"/about"}>About</NavLink>
                                    <Button className='w-24' appearance="primary">Login</Button>
                                </div>
                            </Drawer.Body>
                        </Drawer>
                    </div>
                    {/* Drawer End */}
                </div>
            </div>
        </nav>
    );
};

export default Header;