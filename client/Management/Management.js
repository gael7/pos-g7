import React from 'react';
import NavigationBar from '../NavigationBar';
import axios from 'axios';

class Management extends React.Component {
  constructor(){
    super();
    const controlPanel = [{
      text: "Add Category",
      icon: "add"
    },{
      text: "Add Product",
      icon: "add"
    },{
      text: "View All Products",
      icon: "visibility"
    },{
      text: "View All Receipts",
      icon: "visibility"
    },{
      text: "Products by Category",
      icon: "search"
    },{
      text: "Receipts by Date Range",
      icon: "search"
    }];
    this.state={
      controlPanel
    };
  }
  render(){
    return (
      <div>
        <NavigationBar />
        <div className="section">
          <div className="row">
            <div className="col m3" id="controlPanel">
              <div className="card-panel">
                {this.state.controlPanel.map((cpo,index)=>(
                  <div key={index} className="row noMarginRow valign-wrapper">
                    <div className="col m8">
                      <p>{cpo.text}</p>
                    </div>
                    <div className="col m4">
                      <a className="btn-floating btn-medium waves-effect waves-light black"><i className="material-icons">{cpo.icon}</i></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col m9" id="actionPanel">
              <div className="card-panel">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default Management;
