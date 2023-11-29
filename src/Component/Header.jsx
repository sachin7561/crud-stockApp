
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
function Header() {

    const [openNavSecond, setOpenNavSecond] = useState(false);
  return (
    <div>
          <MDBNavbar expand='lg' light bgColor='success' >
      <MDBContainer fluid>
        <img src="https://www.cliksoftware.com/wp-content/uploads/2022/05/stock-control_clik-900x600.png" width={'2%'} alt="" />
        <MDBNavbarBrand href='#' className='text-white'>Stock Management System</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
           
   
          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header