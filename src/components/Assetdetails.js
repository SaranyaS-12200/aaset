import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import * as ReactBootStrap from "react-bootstrap";


export function Assetdetails({ userdls }) {
  const history = useHistory();
  const { id } = useParams();
  console.log(id, userdls);
  const Asset = userdls[id];
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <div className="Table">
          {/* <ReactBootStrap.Table striped bordered hover size="sm"> */}
            <thead>
              <tr>
                <th>UINO:</th>
                <th>User Name</th>
                <th>AssetNo</th>
                <th>BrandName</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Asset.id}</td>
                <td>{Asset.fullname}</td>
                <td>{Asset.assetno}</td>
                <td>{Asset.brandname}</td>
                <td>{Asset.description}</td>
                <td>{Asset.status}</td>
              </tr>
            </tbody>
          {/* </ReactBootStrap.Table> */}
        </div>
      </Card>
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
    </div>
  );
}
