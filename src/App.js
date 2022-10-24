import React, { useState } from 'react';
import './style.css';

export default function App() {
  const countries = ['Australia', 'India', 'Germany', 'Canada', 'France'];
  const hobbiess = ['Swimming', 'Tennis'];
  const gender = ['Male', 'Female'];
  const [formData, setFormData] = useState({
    fname: '',
    country: '',
    range: 0,
    hobbies: [],
    gender: '',
    date: '',
    color: '',
  });
  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checkedValue = e.target.checked;
    setFormData((prevValue) => {
      if (name === 'fname') {
        return {
          fname: value,
          country: prevValue.country,
          range: prevValue.range,
          hobbies: prevValue.hobbies,
          gender: prevValue.gender,
          date: prevValue.date,
          color: prevValue.color,
        };
      } else if (name === 'country') {
        return {
          fname: prevValue.fname,
          country: value,
          range: prevValue.range,
          hobbies: prevValue.hobbies,
          gender: prevValue.gender,
          date: prevValue.date,
          color: prevValue.color,
        };
      } else if (name === 'range') {
        return {
          fname: prevValue.fname,
          country: prevValue.country,
          range: value,
          hobbies: prevValue.hobbies,
          gender: prevValue.gender,
          date: prevValue.date,
          color: prevValue.color,
        };
      } else if (name === 'Swimming') {
        return {
          fname: prevValue.fname,
          country: prevValue.country,
          range: prevValue.range,
          hobbies:
            checkedValue === true
              ? [...prevValue.hobbies, 'Swimming']
              : prevValue.hobbies.filter((c) => {
                  return c !== value;
                }),
          gender: prevValue.gender,
          date: prevValue.date,
          color: prevValue.color,
        };
      } else if (name === 'Tennis') {
        return {
          fname: prevValue.fname,
          country: prevValue.country,
          range: prevValue.range,
          hobbies:
            checkedValue === true
              ? [...prevValue.hobbies, 'Tennis']
              : prevValue.hobbies.filter((c) => {
                  return c !== value;
                }),
          gender: prevValue.gender,
          date: prevValue.date,
          color: prevValue.color,
        };
      } else if (name === 'gender') {
        return {
          fname: prevValue.fname,
          country: prevValue.country,
          range: prevValue.range,
          hobbies: prevValue.hobbies,
          gender: value,
          date: prevValue.date,
          color: prevValue.color,
        };
      } else if (name === 'date') {
        return {
          fname: prevValue.fname,
          country: prevValue.country,
          range: prevValue.range,
          hobbies: prevValue.hobbies,
          gender: prevValue.gender,
          date: value,
          color: prevValue.color,
        };
      } else if (name === 'color') {
        return {
          fname: prevValue.fname,
          country: prevValue.country,
          range: prevValue.range,
          hobbies: prevValue.hobbies,
          gender: prevValue.gender,
          date: prevValue.date,
          color: value,
        };
      }
    });
  };

  const onSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
  };

  const onReset = (e) => {
    setFormData({
      fname: '',
      country: '',
      range: 0,
      hobbies: [],
      gender: '',
      date: '',
      color: '',
    });
    e.preventDefault();
  };
  return (
    <>
      {JSON.stringify(formData)}
      <div className="container">
        <form onSubmit={onSubmit} noValidate autoComplete="true">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              value={formData.fname}
              onChange={handleEvent}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Example select</label>
            <select
              className="form-control"
              name="country"
              onChange={handleEvent}
            >
              <option defaultValue>---Select----</option>
              {countries.map((country) => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Range</label>
            <input
              type="range"
              className="form-control"
              name="range"
              value={formData.range}
              onChange={handleEvent}
              placeholder="Enter Range"
            />
          </div>
          <div className="form-group">
            <label>Hobbies</label>
            {hobbiess.map((item) => {
              return (
                <div key={item} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={item}
                    name={item}
                    onChange={handleEvent}
                  />
                  <label className="form-check-label">{item}</label>
                </div>
              );
            })}
          </div>
          <div className="form-group">
            {gender.map((item) => {
              return (
                <div key={item} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={item}
                    checked={formData.gender === item}
                    onChange={handleEvent}
                    name="gender"
                  />
                  <label className="form-check-label">{item}</label>
                </div>
              );
            })}
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleEvent}
              placeholder=" Date"
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              type="color"
              className="form-control"
              name="color"
              value={formData.color}
              onChange={handleEvent}
              placeholder="Color "
            />
          </div>
          <button type="reset" onClick={onReset} className="btn btn-primary">
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
