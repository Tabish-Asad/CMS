import React, { useState } from 'react'
import { addCustomer, deleteCustomer, getCustomerList, modifyCustomer, searchCustomer } from '../BLL/CustomerBLL';
import CustomerList from './CustomerList';

function Customer(props) {
    let [id, setID] = useState("-1");
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    let [mobileNo, setMobileNo] = useState("");
    let [arrCus, setArrCus] = useState([])

    function updateStateArray() {
        let arr = getCustomerList();
        setArrCus(arr);
    }

    function id_OnChange(e) {
        setID(e.target.value);
    }
    function name_OnChange(e) {
        setName(e.target.value);
    }
    function address_OnChange(e) {
        setAddress(e.target.value);
    }
    function mobileNo_OnChange(e) {
        setMobileNo(e.target.value);

    }

    function addBtn_Click(e) {
        addCustomer(id, name, address, mobileNo);
        updateStateArray();
        // var arr=getCustomerList();
        // setArrCus(arr)

    }
    function dltBtn_Click(id) {
        deleteCustomer(id);
        updateStateArray();
        // let arr=getCustomerList();
        // setArrCus(arr)
    }
    function searchBtn_Onclick(e) {
        var e = searchCustomer(id);
        if (e) {
            setName(e.name);
            setAddress(e.address);
            setMobileNo(e.mobileNo);
        }
    }
    function modifyBtn_Click(e) {
        modifyCustomer(id, name, address, mobileNo);
        updateStateArray();


    }
    return (
        <>
            <div className='container m-5 mb-3 p-4 bg-info bg-opacity-50 border border-info rounded-2'>
                <form action="">
                    <h3 className='text-center text-danger mb-5'>
                        Customer Management System
                    </h3>
                    <div className='row mb-1'>
                        <label className='col-sm-0 fw-semibold col-form-label'>ID:</label>
                        <div className='col-sm-8'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter Your ID Number'
                                value={id}
                                onChange={id_OnChange}
                            />
                        </div>
                    </div>

                    <div className='row-mb-3'>
                        <label className='col-sm-9 fw-semibold col-form-label'>Name:</label>
                        <div className='col-sm-8'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter Your Name'
                                value={name}
                                onChange={name_OnChange}
                            />
                        </div>
                    </div>

                    <div className='row-mb-3'>
                        <label className='col-sm-2 fw-semibold col-form-label'>Address:</label>
                        <div className='col-sm-8'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter Full Address'
                                value={address}
                                onChange={address_OnChange}
                            />
                        </div>
                    </div>

                    <div className='row-mb-3'>
                        <label className='col-sm-2 fw-semibold col-form-label'>Mobile No:</label>
                        <div className='col-sm-8'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter Mobile Number'
                                value={mobileNo}
                                onChange={mobileNo_OnChange}
                            />
                        </div>
                    </div>

                </form>

                <button onClick={addBtn_Click} className='btn btn-primary m-2'>Add</button>
                {/* <button onClick={dltBtn_Click} className='btn btn-primary m-2'>Delete</button> */}
                <button onClick={searchBtn_Onclick} className='btn btn-primary m-2'>Search</button>
                <button onClick={modifyBtn_Click} className='btn btn-primary m-2'>Modify</button>
            </div>

            <div className='container'>
                <CustomerList arrCus={arrCus} updateArrCustomer={updateStateArray} />
            </div>
        </>
    );
}

export default Customer
