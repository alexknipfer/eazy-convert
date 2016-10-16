import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './priceForm.css';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

class PriceForm extends Component{

  constructor(){
    super();
    this.calculateTax = this.calculateTax.bind(this);
    this.state = {
      totalTax: "0.00%",
      costOfItem: "$0.00"
    }
  }

  calculateTax(){
    const itemCost = document.getElementById('itemCost').value;
    const taxPercentage = document.getElementById('taxPercentage').value;


    if(itemCost=== '' && taxPercentage !== ''){
      this.setState({
        costOfItem: '$0.00',
        totalTax: taxPercentage
      });
    }

    else if(taxPercentage === '' && itemCost!== ''){
      this.setState({
        costOfItem: itemCost,
        totalTax: '0.00%'
      });
    }

    else if(taxPercentage === '' && itemCost === ''){
      this.setState({
        costOfItem: '$0.00',
        totalTax: '0.00%'
      });
    }

    else{
      this.setState({
        totalTax: itemCost,
        costOfItem: taxPercentage
      });
    }


  }

  render(){
    return(
      <div className="salesCard">
        <Card>
          <CardTitle title="Sales Tax Calculator" />
          <CardText>
          <form>
            <TextField hintText="Item Cost" id="itemCost" onChange={this.calculateTax}/>
            <br />
            <TextField hintText="Sales Tax Percentage (%)" id="taxPercentage" onChange={this.calculateTax}/>
            <br />
            <br />
            <LinearProgress mode="determinate" />
            <br />
            <h1>{this.state.totalTax}</h1>
            <br />
            <h1>{this.state.costOfItem}</h1>
            <br />
          </form>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default PriceForm;
