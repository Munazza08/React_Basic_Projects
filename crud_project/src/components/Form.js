import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

const Form = ({ showModal, closeModal, userData, refreshData }) => {
  const [user, setUser] = useState({ e_name: '', e_age: '', e_email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (showModal && userData) {
      setUser(userData);
    }
  }, [showModal, userData]);

  const handleChange = (e) => {
    {/* setUser({ ...user, [e.target.name]: e.target.value }); */}
    setUser((pre) =>({
      ...pre, 
      [e.target.name]: e.target.value
    }))
  };

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/users', user)
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5001/users/${user.id}`, user)
      .then(() => {
        refreshData();
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  if (showModal) {
    return (
      <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Edit User</h5>
              <button className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <CustomInput className="form-control my-2" name="e_name" value={user.e_name} onChange={handleChange}/>
              <CustomInput className="form-control my-2" name="e_age" value={user.e_age} onChange={handleChange}/>
              <CustomInput className="form-control my-2" name="e_email" value={user.e_email} onChange={handleChange}/>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
              <button className="btn btn-success" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container col-md-6 mg-auto mt-4">
      <h2>Create New User</h2>
      <form className="mt-5 border p-3" onSubmit={handleCreate}>
        <CustomInput className="form-control my-2" name="e_name" placeholder="Name" value={user.e_name} onChange={handleChange}/>
        <CustomInput className="form-control my-2" name="e_age" placeholder="Age" value={user.e_age} onChange={handleChange}/>
        <CustomInput className="form-control my-2" name="e_email" placeholder="Email" value={user.e_email} onChange={handleChange}/>
        <div className="d-grid">
          <CustomButton text="Submit" className="btn-primary mt-2" type="submit"/>
        </div>
      </form>

      <div className="mt-4">
        <CustomButton text="Show Data" onClick={() => navigate('/')} className="btn-success" />
      </div>
    </div>
  );
};

export default Form;


