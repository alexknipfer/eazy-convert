import React, { Component } from 'react';
import {Link} from 'react-router';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Card className="home-navigation">
          <CardTitle title="Calculation Control Panel" />
            <CardText>

            <List>
              <ListItem primaryText="Sales Tax Calculator"><Link to="/priceForm"></Link>< /ListItem>
              <Divider />
              <ListItem primaryText="Conversion 1" />
              <Divider />
              <ListItem primaryText="Conversion 2" />
              <Divider />
              <ListItem primaryText="Conversion 3" />
              <Divider />
              <ListItem primaryText="Conversion 4" />
            </List>

            </CardText>
        </Card>
      </div>
    );
  }
}

export default Home;
