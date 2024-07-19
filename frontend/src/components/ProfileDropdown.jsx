import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import "../styles/ProfileDropdown.css";

function ProfileDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('REFRESH_TOKEN');
        navigate('/login');
    };

    return (
        <div className="profile-dropdown">
            <FaUserCircle
                size={30}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="profile-icon"
            />
            {dropdownOpen && (
                <div className="dropdown-menu">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
