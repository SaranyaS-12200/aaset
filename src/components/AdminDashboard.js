import React from "react";
// import * as ReactBootStrap from "react-bootstrap";
export function AdminDashboard({userdls,setUserdls}) {
  return (

    <div className="Table">
      {/* <ReactBootStrap.Table striped bordered hover size="sm"> */}
        <thead>
          <tr>
            <th>UINO:</th>
            <th>User Name</th>
            <th>Position</th>
            <th>Gender</th>
            <th>Department</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {userdls.map(({id,fullname,position,gender,dept}, index) => (
            <UserListTableView position={position} gender={gender} dept={dept} id={id} fullname={fullname}
            
            
            />
          ))}
        </tbody>
      {/* </ReactBootStrap.Table> */}
    </div>
  );
}

function UserListTableView({ id, fullname, position , gender ,dept ,moreinfo}) {
    return (
          <tr>
            <td>{id}</td>
            <td>{fullname}</td>
            <td>{position}</td>
            <td>{gender}</td>
            <td>{dept}</td>
            <td>{moreinfo}</td>
          </tr>
    );
  }
