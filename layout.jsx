import React from 'react';
import Header from './header'; // Fix the import path here
import Footer from './footer'; // Fix the import path here
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

