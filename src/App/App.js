import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../Login/Login.js';
import Registration from '../Registration/Registration.js';
import HomePage from '../Home/HomePage.js';
import WmNavBar from '../wm_nav_bar/wmNavBar.js';
import Footer from '../footer/footer.js';

class App extends Component {

    constructor() {
        super();
    this.state = {
      appPage: "home"
    };

    this.changeAppPage = this.changeAppPage.bind(this);
        
  }
    
    changeAppPage(newPage) {
        this.setState({
            appPage: newPage
        });
    }
    
    render() {

        return (

        /*Add a browser router for routing with paths*/
      <div >
        <BrowserRouter>
        <div>
            {/* Add a nav bar at the top of the page */}
            <WmNavBar currentAppPage={this.state.appPage}></WmNavBar>
            
            {/*  Homepage, Login, Registration Pages will change depending upon route selection. */}
            <Route exact path="/" render={()=><HomePage changeAppPage={this.changeAppPage}></HomePage>}></Route>
            <Route path="/login" render={()=><Login changeAppPage={this.changeAppPage}></Login>}></Route>
            <Route path="/registration" render={()=><Registration changeAppPage={this.changeAppPage}></Registration>}></Route>
            
            {/*  A footer will always be displayed at the bottom of every page. */}
            
            { this.state.appPage !== "registration" && 
                <Footer></Footer> }
            
        </div>
        </BrowserRouter>
    
            
     </div>
        
    );
  }
}

export default App;
