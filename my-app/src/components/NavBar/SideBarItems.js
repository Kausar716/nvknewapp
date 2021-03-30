import React from'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarItem = [
    {
        title: 'Dashboard',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },

    {
        title: 'Customer Quotes & Orders',
        path: '/CustomerQuotesOrders',
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },

    {
        title: 'Purchase Order',
        path: '/purchaseOrder',
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },

    {
        title: 'Inventory',
        path: '/Inventory',
        icons: <FaIcons.FaCartPlus />,
        cName: "nav-text",
    },

    {
        title: 'Customer Management',
        path: '/CustomerManagement',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    
    {
        title: 'Supplier Management',
        path: '/SupplierManagement',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },

    {
        title: 'Tools & Settings',
        path: '/Tools_Setting',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },

    {
        title: 'Reports',
        path: '/Reports',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: 'Staff Directory',
        path: '/StaffDirectory',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: 'Message Center',
        path: '/MessageCenter',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: 'User Management',
        path: '/UserManagement',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: 'Map Locator',
        path: '/MapLocator',
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
   



]