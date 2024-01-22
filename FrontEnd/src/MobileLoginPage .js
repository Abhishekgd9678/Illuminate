import React, { useState } from 'react';
import axios from 'axios';

const MobileLoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      phoneNumber:phoneNumber,
    };

    try {
      const response = await axios.post('https://sheet.best/api/sheets/606461bd-17b5-4fce-8b50-3242d56a585f', formData
      );
      console.log('Sheet.best Response:', response.data);
      if(response.data[0].email===email){
        setRegistrationSuccess(true);
      }
    } catch (error) {
      console.error('Error sending data to Sheet.best:', error);
      // Add logic to handle errors
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
     {!registrationSuccess?(
      <form className="mb-4" onSubmit={handleSubmit}>
        <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary-500"
          placeholder="Enter your FirstName"
        />

        <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary-500"
          placeholder="Enter your LastName"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary-500"
          placeholder="Enter your email"
        />

        <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">
          Phone Number
        </label>
        <input
          type="text"
          id="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary-500"
          placeholder="Enter your Phone Number"
        />

        <button
          className="mt-4 bg-primary-500 text-white bg-blue-400 p-2 rounded-md w-full hover:bg-primary-600 focus:outline-none"
          type="submit"
        >
          Register
        </button>
      </form>):(<div className="text-green-600 text-center">
            Successfully registered! Thank you.
          </div>)}
    </div>
  );
};

export default MobileLoginPage;
