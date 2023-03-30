import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Css/Update.css";

function Update() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({ _id: "", Town: "", Need: "", Place: "" });

  useEffect(() => {
    Axios.get("http://localhost:3100/HS").then((response) => {
      setData(response.data);
    });
  }, []);

  const changeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
  
    // Check if the input is for the "Need" field
    if (name === "Need") {
      // Convert the input value to a number
      const donation = parseInt(val, 10);
  
      // Calculate the new value of "Need" by subtracting the donation
      const updatedNeed = Math.max(0, parseInt(updateData.Need, 10) - donation);
  
      // Update the state with the new "Need" value
      setUpdateData({ ...updateData, [name]: updatedNeed });
    } else {
      setUpdateData({ ...updateData, [name]: val });
    }
  };
  
  
  

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:3100/HS/${updateData._id}`, { data: updateData }).then((response) => {
      alert(response.data);
      setUpdateData({ _id: "", Town: "", Need: "", Place: ""});
      window.location.reload();
    });
  };
  
  const displayData = () => {
    return data.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Town}</td>
          <td>{item.Need}</td>
          <td>{item.Place}</td>
          <td>
            <button onClick={() => setUpdateData(item)}>Donate</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="update-container">
      <h1 className="update-title">Update InventoryMS</h1>
      <table className="update-table">
        <thead>
          <tr>
            <th>Town</th>
            <th>Need</th>
            <th>Place</th>
            <th>Donate</th>
          </tr>
        </thead>
        <tbody>{displayData()}</tbody>
      </table>
      <br />
      {updateData._id && (
        <div className="update-form">
          <h3 className="update-form-title">Update Item</h3>
          <form onSubmit={submitHandler}>
            <label className="update-form-label" class="col-sm-3 col-form-label text-light">Donate:</label>
            <input type="text" name="Need" value={updateData.Need.toString()} onChange={changeHandler} className="update-form-input" placeholder="No. of meals per person"/>
            <br />
            <label className="update-form-label" class="col-sm-3 col-form-label text-">Place:</label>
            <input type="text" name="Place" value={updateData.Place} onChange={changeHandler} className="update-form-input" placeholder="Your place"/>
            <br />
            <button type="submit" className="update-form-button">Donate</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
