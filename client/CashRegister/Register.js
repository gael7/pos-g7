import React from 'react';
import NavigationBar from '../NavigationBar';
import axios from 'axios';

class Register extends React.Component{
  constructor(){
    super();
    const registerButtons = [{
      name: "Tab",
      icon: "restaurant"
    },{
      name: "Pay",
      icon: "attach_money"
    },{
      name: "Update",
      icon: "refresh"
    }];

    const totalStylePanel = {
      padding: "10px"
    };

    this.state={
      registerButtons,
      totalStylePanel,
      categories: []
    };
  }
  componentDidMount() {
    var self = this;
    axios.get('/api/categories')
    .then(function (response){
      console.log(response);
      self.setState({categories: response.data});
    }).catch(function (error){
      console.log(error);
    });
  }

  render(){
    return(
      <div>
        <NavigationBar />
        <div className="section">
          <div className="row">
            <div className="col m6" id="productsArea">
              <div className="card-panel black">
                <span className="white-text">
                    <h5 className="center">Products</h5>
                    {this.state.categories.map((pt, index2)=>(
                      <div key={index2} className="col m4">
                        <a className="waves-effect blue btn-large">{pt.categoryName}</a>
                      </div>
                    ))}
                </span>
              </div>
            </div>
            <div className="col m6" id="receiptArea">
              <div className="row">
                <div className="col m12" id="ticketArea">
                  <div className="card-panel black" >
                    <span className="white-text">
                      <h5 className="center">Ticket</h5>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m12" id="totalArea">
                  <div className="card-panel black" style={this.state.totalStylePanel}>
                    <span className="white-text">
                      <div className="row noMarginRow">
                      <div className="col m4">
                        <p>Total</p>
                      </div>
                      <div className="col m8">
                        <p className="right">Amount</p>
                      </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m12" id="registerButtonsArea">
                  {this.state.registerButtons.map((rb, index) => (
                    <div key={index} className="col m4">
                      <a className="waves-effect black btn-large"><i className="material-icons left">{rb.icon}</i>{rb.name}<br/></a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Register;
