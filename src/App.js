import React from "react";
import { BrowserRouter, Redirect, Route, Switch,Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import PostApp from "./PostApp";



function App(){
    return (
       <BrowserRouter>
     <div className="navbar">
       <Link exact className = "navStyle" to="/"> <i class="fa fa-fw fa-home"></i> Home</Link>
       <Link className = "navStyle" to="/About"> <i class="fa fa-fw fa-users"></i> About</Link>
       <Link className = "navStyle" to="/PostApp"> <i class="fas fa-mail-bulk"></i> Posts</Link>
       </div>
    <Switch>
    
    <Route path= "/About" render={() => <About />} />

    <Route path= "/PostApp" render={() => <PostApp />} />
    <Route path= "/Post" render={() => <Post />} />
    <Route exact path= "/" render={() => <Home />} />
    <Route path= "/home">
     <Redirect to= "/" />
        </Route>
    <Route path ="*">

     <h1>404 Error</h1>
    </Route>
     
    </Switch>
     </BrowserRouter>
   

    
    
    );
}
export default App;