import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid blue",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};
// Presentational component - Stateless
function PhoneBookForm({ addEntryToPhoneBook }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phone: e.target.phone.value,
    };
    if (user.firstname && user.lastname && user.phone) {
      addEntryToPhoneBook((users) => [...users, user]);
      e.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="firstname"
        type="text"
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="lastname"
        type="text"
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="phone"
        type="text"
      />
      <br />
      <button
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
      >
        Add User
      </button>
    </form>
  );
}

// Presentational component - Stateless
function InformationTable({ users }) {
  return users ? (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{user.firstname}</td>
            <td style={style.tableCell}>{user.lastname}</td>
            <td style={style.tableCell}>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    "No hay usuarios"
  );
}
// Container component - Statefull
function Application(props) {
  const [usersList, setUsersList] = useState([]);
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={setUsersList} />
      <InformationTable users={usersList} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
