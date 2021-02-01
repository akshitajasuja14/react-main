import React from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import UserDashboard from "./UserDashboard";
import Userprofile from "./Userprofile";
import Availmedicine from "./Availmedicine";
import ManageMed from "./ManageMed";
import SearchMed from "./SearchMed";
import NavbarRouter from "./NavbarRouter";
import Frontpage from "./FrontPage";



function HomeRouter() {

    return (
        <>
            {/* <NavbarRouter></NavbarRouter> */}

            <Switch>
                <Route path="/" exact component={Frontpage}></Route>
                <Route path="/Signup" exact component={Signup}></Route>
                <Route path="/Login" exact component={Login}></Route>
                <Route path="/User-Dashboard" exact component={UserDashboard}></Route>
                <Route path="/User-Profile" exact component={Userprofile}></Route>
                <Route path="/Post-Medicine" exact component={Availmedicine}></Route>
                <Route path="/Manage-Medicine" exact component={ManageMed}></Route>
                <Route path="/Search-Medicine" exact component={SearchMed}></Route>

            </Switch>



        </>
    );
}
// function frontPage() {
//     // var logo = "./pics/homeicon.png";
//     return (
//         <h2 >Welcome <br></br><br></br>
//             {/* <img src={logo} height="400" width="400"></img> */}
//         </h2>
//     );
// }


export default HomeRouter;