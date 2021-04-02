import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Customer Details",
    to: "/customer",
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Booking Details"],
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Booking',
    route: '/icons',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List Bookings',
        to: '/listBooking',
        icon: "cil-list",
        badge: {
          color: 'success',
        },
      },
      {
        _tag: "CSidebarNavItem",
    name: "Booking",
    to: "/addBooking",
    icon: "cil-cursor",
    badge: {
      color: "success",
    },
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Vehicle Details"],
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Vehicle",
  //   to: "/addTruck",
  //   icon: "cli-truck",
  // },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vehicle Details',
    route: '/icons',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List Vehicle',
        to: '/listVehicles',
        icon: "cil-list",
        badge: {
          color: 'success',
        },
      },
      {
        _tag: "CSidebarNavItem",
    name: "Add Vehicles",
    to: "/addTruck",
    icon: "cil-cursor",
    badge: {
      color: "success",
    },
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Invoice"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Invoice",
    to: "/invoice",
    icon: <CIcon name="cil-document" customClasses="c-sidebar-nav-icon" />,
  },



  
];

export default _nav;
