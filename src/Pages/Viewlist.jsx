import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody , MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'react-bootstrap';
import { createstock, editstock,deletestock } from '../Redux/Slices/stockSlice';

function  Viewlist() {
    const [staticModal, setStaticModal] = useState(false);
    const stocks = useSelector(state=>state.stockKey)
    const dispatch = useDispatch();

    const toggleOpen = (i) => {
        setStaticModal(!staticModal)
        setEditIndex(i)
        setUpdatedStock({stockname:stocks[i]?.stockName,serialnumber:stocks[i]?.serialnumber})
    };
    
    const [stockName,setstockName] = useState("")
    const [stockSerialNumber,setstockSerialNumber] = useState("")
    const [stockDp,setstockDp] = useState("")
    const [stockMrp,setstockMrp] = useState("")
    const stock ={
        stockName,
        stockSerialNumber,stockDp,stockMrp
    }
    const [updatedStock,setUpdatedStock] = useState({stockname:"",serialnumber:"",stockDp:"",stockMrp:""})
     // Index of the contact being edited
     const [editIndex, setEditIndex] = useState(-1); 

    const handleUpdateStock = () => {
        if (editIndex !== -1) {
            dispatch(
                editstock({
                    index: editIndex,
                    updatedContact: {
                        stockName: updatedStock.stockname,
                        stockserialumber: updatedStock.serialnumber,
                        stockDp: updatedStock.stockDp,
                        stockMrp: updatedStock.stockMrp
                    }
                })
            );
            setStaticModal(false); // Close the modal after updating
            setEditIndex(-1); // Reset the edit index
        }
    };
    console.log(stock);

  return (

        
      <>

        

          <div className="container my-5">
            <h2 className='my-5'>stock details</h2>

            <div className='my-5'>
            <MDBBtn className='m-3'  onClick={(e)=>toggleOpen()}>Add Stock<i className='fa-solid fa-user-plus mx-3 m-2 ' /></MDBBtn>

           
            </div>
            {/* <div className='m-5  d-flex flex-column align-items-center  gap-2 w-50'>
            <MDBInput onChange={(e)=>setContactName(e.target.value)} label='Contact Name' id='formControlLg' type='text' className='mb-3' size='md' />
            <MDBInput onChange={(e)=>setContactNumber(e.target.value)}  label='Contact Number' id='formControlLg' type='text' className='mb-3' size='md' />
            <MDBBtn  onClick={()=>{contactName && contactNumber && dispatch(createContact(contact))}}>Add Contact<i className='fa-solid fa-user-plus mx-1' /></MDBBtn>
            </div> */}
            {/* table */}
              {stocks.length>=0 && 
              <MDBTable className='containe' border={2} style={{margin:'10px'}} align='middle'>
                  <MDBTableHead className='m-5'>
                      <tr >
                          <th scope='col'>NO:</th>
                          <th scope='col'>S_Name</th>
                          <th scope='col'>Serial No</th>
                          <th scope='col'>Dp</th>
                          <th scope='col'>Mrp</th>
                          <th scope='col'>Action</th>
                          
                      </tr>
                  </MDBTableHead>
                  <MDBTableBody >
                      {
                        stocks.map((stock,i)=>(
                        <tr>
                          <td>
                              {i + 1}
                          </td>
                          <td>
                              <div className='d-flex align-items-center'>
                                  {/* <img
                                      src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                      alt=''
                                      style={{ width: '45px', height: '45px' }}
                                      className='rounded-circle'
                                  /> */}
                                  <div className='ms-3'>
                                      <p className='fw-bold mb-1'>{stock.stockName}</p>
                                  </div>
                              </div>
                          </td>
                          <td>
                              <p className='fw-normal mb-1'>{stock.stockSerialNumber}</p>
                          </td>
                          <td>
                              <p className='fw-normal mb-1'>{stock.stockDp}</p>
                          </td>
                          <td>
                              <p className='fw-normal mb-1'>{stock.stockMrp}</p>
                          </td>
                          <td>
                              <MDBBtn onClick={(e)=>toggleOpen(i)} color='link' rounded size='lg'>
                              <i class="fa-solid fa-pen-to-square"></i>
                              </MDBBtn>
                              <MDBBtn onClick={(e)=>dispatch(deletestock(i))} color='link' rounded size='lg'>
                              <i class="fa-solid fa-trash"></i>
                              </MDBBtn>
                          </td>
                      </tr>
                      ))}
                  </MDBTableBody>
              </MDBTable>
              }
          </div>

          {/* modal */}
          <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Stock Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBInput value={updatedStock.stockname} onChange={(e)=>setUpdatedStock({...updatedStock,stockname:e.target.value})}  label='Stock Name' id='formControlLg' type='text' className='mb-3' size='lg' />
           
            <MDBInput value={updatedStock.serialnumber} onChange={(e)=>setUpdatedStock({...updatedStock,serialnumber:e.target.value})} label='serial No' id='formControlLg' type='text' className='mb-3' size='lg' />
            <MDBInput value={updatedStock.stockDp} onChange={(e)=>setUpdatedStock({...updatedStock,stockDp:e.target.value})} label=' Stock Dp' id='formControlLg' type='text' className='mb-3' size='lg' />
            <MDBInput value={updatedStock.stockMrp} onChange={(e)=>setUpdatedStock({...updatedStock,stockMrp:e.target.value})} label='Stock Mrp' id='formControlLg' type='text' className='mb-3' size='lg' />

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleUpdateStock} >Update</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Stock Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>


            <div className='m-5  d-flex flex-column align-items-center  gap-2 w-80'>
            <MDBInput onChange={(e)=>setstockName(e.target.value)} label='Stock Name' id='formControlLg' type='text' className='mb-3' size='lg' />
            <MDBInput onChange={(e)=>setstockSerialNumber(e.target.value)}  label='Serial Number' id='formControlLg' type='text' className='mb-3' size='lg' />
            <MDBInput onChange={(e)=>setstockDp(e.target.value)}  label='Stock Dp' id='formControlLg' type='text' className='mb-3'size='lg' />
            <MDBInput onChange={(e)=>setstockMrp(e.target.value)}  label='Stock Mrp' id='formControlLg' type='text' className='mb-3'size='lg' />

            </div>


            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn  onClick={()=>{stockName && stockSerialNumber &&stockDp &&stockMrp && dispatch(createstock(stock)) && toggleOpen()}}>Add stock<i className='fa-solid fa-user-plus mx-1' /></MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



      
      </>
  )
}



export default Viewlist