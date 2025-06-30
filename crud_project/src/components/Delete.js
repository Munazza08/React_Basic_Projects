import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from './CustomButton';

const Delete = ({ id, onDelete }) => {

  const[show, setShow] = useState(false);

  const deleteClick = () => {
    setShow(true);  
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5001/users/${id}`)
      .then(() => {
        onDelete();
        setShow(false); 
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleCancel = () =>{
    setShow(false);
  }

  return(
    <>
    <CustomButton text="Delete" onClick={deleteClick} className="btn-danger" />
    {show && (
      <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-4">
        <div className="p-4 border rounded-2" style={{ fontSize: '22px', backgroundColor: '#8DBCC7' , margin: '50px' , zIndex: 9999 }}>
         {`Are you sure you want to delete the data with id= ${id} ?`}
         <div className="d-flex justify-content-end gap-3 mt-4">
           <CustomButton text="Cancel" onClick={handleCancel} className="btn-primary mb-3 me-4" />
           <CustomButton text="Delete" onClick={handleDelete} className="btn-danger mb-3 me-4" />
         </div>
        </div>
      </div>
    )}
    </>
  )
};
 
export default Delete;

