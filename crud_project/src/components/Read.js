import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Delete from './Delete';
import CustomButton from './CustomButton';
import Form from './Form';

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const getData = () => {
    axios.get('http://localhost:5001/users')
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const openEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <>
     <header className="d-flex justify-content-between mt-4">
        <h1>User Details</h1>
        <div className="mt-3">
            <CustomButton text="Create New Data" onClick={() => navigate('/form')} className="btn-success" />
        </div>
     </header>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-hover mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_age}</td>
                  <td>{item.e_email}</td>
                  <td>
                    <CustomButton text="Edit" onClick={() => openEdit(item)} className="btn-primary" />
                  </td>
                  <td>
                    <Delete id={item.id} onDelete={getData} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      {showModal && (
        <Form
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          userData={selectedUser}
          refreshData={getData}
        />
      )}
    </>
  );
};

export default Read;


