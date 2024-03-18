"use client"
import React, { FormEvent, useState } from 'react';

export default function  SignInForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your form submission logic here
    console.log('Form submitted with data:', formData);
  };

  const handleInputChange = (event: FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Submit button */}
      <button type="submit">Sign Up</button>
    </form>
  );
}


