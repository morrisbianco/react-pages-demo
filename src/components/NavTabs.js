import React from 'react';
import NavItem from './NavItem';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We are destructering the props sent to us so that we can use what we want
function NavTabs({ pages, currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      {pages.map(page => {
        const data = { page, currentPage, handlePageChange };
      return ( <NavItem key={page} {...data} /> );
      })}
    </ul>
  );
}

export default NavTabs;
