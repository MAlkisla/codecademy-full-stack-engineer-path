import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    homeroom: '',
    studentID: '',
    favoriteLunch: 'pizza',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Student Form</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Homeroom Class Number:
          <input
            type="text"
            name="homeroom"
            value={formData.homeroom}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Student ID:
          <input
            type="text"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Favorite Lunch:
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="pizza"
              checked={formData.favoriteLunch === 'pizza'}
              onChange={handleChange}
            />
            Pizza
          </label>
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="salad"
              checked={formData.favoriteLunch === 'salad'}
              onChange={handleChange}
            />
            Salad
          </label>
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="burger"
              checked={formData.favoriteLunch === 'burger'}
              onChange={handleChange}
            />
            Burger
          </label>
        </label>
      </form>
      <div>
        <h2>Current Input:</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Age: {formData.age}</p>
        <p>Address: {formData.address}</p>
        <p>Homeroom Class Number: {formData.homeroom}</p>
        <p>Student ID: {formData.studentID}</p>
        <p>Favorite Lunch: {formData.favoriteLunch}</p>
      </div>
    </div>
  );
}

export default StudentForm;
