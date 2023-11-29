import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Contact from '../Assests/Contact.png'
import { MDBBtn } from 'mdb-react-ui-kit'
import Viewlist from './Viewlist'
import { useNavigate } from 'react-router-dom'





function Home() {
    const location=useNavigate()
  return (
    <div>
        
        <Row>
            <Col className=''>
            <img src={Contact} width={'80%'} alt="" />
            </Col>
            <Col>
           <div className='m-1'>
           <h1 className='' style={{marginTop:'210px'}}>Welcome to Stock Management System</h1>
          
      <MDBBtn color='info' className='m-2'  onClick={()=>location('/Viewlist')}>
               Add New Stocks
      </MDBBtn>
      <MDBBtn color='info' className='m-2'  onClick={()=>location('/Viewlist')}>
               Manage Stocks
      </MDBBtn>
           </div>
            </Col>
        </Row>
    </div>
  )
}

export default Home