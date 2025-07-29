import React, { useState } from 'react'

import user1 from '../shared/user (1).png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router';
import { CalendarArrowUp, SquareArrowOutUpLeft, User } from 'lucide-react';
import { useUserId } from '../futures/services/useUserId';

const Accounts = () => {
    let userId = useUserId()
    function logout() {
        localStorage.removeItem("access_token")
        alert("hush omaded")
        window.location.href = "/login";
    }

    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div>
                {localStorage.getItem('access_token') && (
                    <img id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} src={user1} alt="User" className="w-6 h-6" />
                )}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                    }}
                >
                    <Link to={`/account/${userId}`}>
                        <MenuItem onClick={handleClose}>
                            <div className='flex gap-[10px]'>
                                <User />
                                My account
                            </div>
                        </MenuItem>
                    </Link>
                    <Link to={'/checkout'}>
                        <MenuItem onClick={handleClose}>
                            <div className='flex gap-[10px]'>
                                <CalendarArrowUp />
                                My Order
                            </div>
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={logout}>
                        <div className='flex gap-[10px]'>
                            <SquareArrowOutUpLeft />
                            Logout
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Accounts