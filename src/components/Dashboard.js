import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { RiAdminFill} from "react-icons/ri";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { useHistory } from 'react-router-dom';

export function Dashboard() {
    const history=useHistory();
  return (
    <div>
            <div className="board">
                <div className="dashboard">
                  <RiDashboardFill />
                  DASH BOARD
                </div>
                <div className="management">
                  <Card className="card">
                    <h1>
                      Admin Dashboard
                      <IconButton
                        aria-label="AdminDashboard"
                        color="primary"
                        onClick={() => history.push("/AdminDashboard")}
                      >
                        <RiAdminFill />
                      </IconButton>
                    </h1>
                  </Card>
                  <Card className="card">
                    <h1>
                      User Dashboard
                      <IconButton
                        aria-label="UserDasboard"
                        color="primary"
                        onClick={() => history.push("/UserDashboard")}
                      >
                        <FaUser />
                      </IconButton>
                    </h1>
                  </Card>
                </div>
              </div>
    </div>
  )
}

 