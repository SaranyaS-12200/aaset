import './App.css';
import { useState } from 'react';
import {Home} from './components/Home';
import {Login} from './components/Login';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useHistory} from "react-router-dom";
import {  Route, Switch } from "react-router-dom";
import {FaAsterisk} from "react-icons/fa";
import Footer from './components/Footer';
import {Dashboard} from './components/Dashboard';
import {AdminDashboard} from "./components/AdminDashboard";
import {UserDashboard} from "./components/UserDashboard";
import { Assetdetails } from './components/Assetdetails';

function App() {
  const Iuserassetdls=[{
    id:"1",
    fullname:"Arun",
    position:"Manager",
    gender:"Male",
    dept:"Management",
    assetno:"20",
    brandname:"Dell",
    category:"laptop",
    description:"New dell Available",
    remarks:"Available",
    warenty:"6/21/2022",
    servicedate:"6/21/2022",
    status:"Good"
    },
    {id:"2",
    fullname:"Arunsha",
    position:"Manager",
    gender:"Male",
    dept:"Management",
    assetno:"20",
    brandname:"Dell",
    category:"laptop",
    description:"New dell Available",
    remarks:"Available",
    warenty:"6/21/2022",
    servicedate:"6/21/2022",
    status:"Good"
    }];
    
  const history=useHistory();
  const [userdls,setUserdls]=useState(Iuserassetdls);
  return (
    <div className="App">
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>history.push('/')}
          >
            <FaAsterisk/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Asset Management
          </Typography>
          {/* <Button color="inherit"
          onClick={() => history.push('/Login')}>Login</Button> */}
          <Button color="inherit" onClick={() => history.push('/signin')}>Signin</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route  exact path='/'><Home/></Route>
        {/* <Route  path='/Login'><Login/></Route> */}
        <Route  path='/dashboard'><Dashboard/></Route>
        <Route path="/AdminDashboard"><AdminDashboard userdls={userdls} setUserdls={setUserdls} /></Route>
        <Route path="/UserDashboard"><UserDashboard/></Route>
        <Route path="/userassetdetail"><Assetdetails userdls={userdls}/></Route>
        <Route path='/signin'><Login/></Route>
      </Switch>
      <Login/>
     <Footer/>
    </div>
     {/* <Login/>
     <Footer/> */}
    </div>
  );
}

export default App;
