import Link from 'next/link';
import React from 'react';
import NavLink from '../components/NavLink';
const navLinks = [
 
    {
      path: "/dashbord/add-product",
      title: "Add-Product",
    },
    {
      path: "/dashbord/manage-product",
      title: "Manage-Product",
    },
    {
      path: "/dashbord",
      title: "Dashboard",
    },
    {
      path: "/",
      title: "Home",
    },
  ];

const Sidebar = () => {
    return (
        <aside className='mr-10'>
            <h1 className='text-3xl font-semibold mt-4'>The Dashboard</h1>
            <ul>
                {
                    navLinks.map(({ path, title }) => <li key={path} className='hover:text-red-700'>
                        <NavLink exact activeClassName="text-red-500" href={path}>{title}</NavLink></li>)
                }
            </ul>
            
        </aside>
    );
};

export default Sidebar;