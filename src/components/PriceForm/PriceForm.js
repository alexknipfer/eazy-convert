import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './priceForm.css';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

class PriceForm extends Component{

  constructor(){
    super();
    this.calculateTax = this.calculateTax.bind(this);
    this.state = {
      totalTax: "0.00",
      costOfItem: "0.00"
    }
  }

  calculateTax(){
    const itemCost = document.getElementById('itemCost').value;
    const taxPercentage = document.getElementById('taxPercentage').value;
    const taxRatePercentage = taxPercentage / 100;
    const amountOfTax = (itemCost * taxRatePercentage);
    const finalDollarAmount = Math.floor(itemCost) + amountOfTax;

    console.log(finalDollarAmount);

    if(itemCost === '' && taxPercentage !== ''){
      this.setState({
        costOfItem: '0.00',
        totalTax: taxPercentage
      });
    }

    else if(taxPercentage === '' && itemCost!== ''){
      this.setState({
        costOfItem: itemCost,
        totalTax: '0.00'
      });
    }

    else if(taxPercentage === '' && itemCost === ''){
      this.setState({
        costOfItem: '0.00',
        totalTax: '0.00'
      });
    }

    else{
      this.setState({
        totalTax: parseFloat(amountOfTax.toFixed(2)),
        costOfItem: parseFloat(finalDollarAmount.toFixed(2))
      });
    }
  }

  render(){
    return(
      <div className="flex-container">
        <Card className="box">
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
            <h1>Total Tax: ${this.state.totalTax}</h1>
            <br />
            <h1>Total Cost: ${this.state.costOfItem}</h1>
            <br />
          </form>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default PriceForm;
