import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import List from './components/List.jsx';
import CampaignList from './components/CampaignList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false,
      username : '',
      campaigns : []
    };
    this.addedCampaign = this.addedCampaign.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmitUsername = this.onSubmitUsername.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  onSubmitUsername(e) {
    e.preventDefault();
    //axios get from db using this username, getting all the campaigns with that username
    // let userNum = window.location.href.split('/');
    // userNum = userNum[userNum.length-1];


    axios.get(`/campaigns/${this.state.username}`)
    .then (response => {
      // console.log("CLIENT | STATUS: Response recieved. | ROWS DATA:", response);
      if (response.data.rows.length === 0) {
        alert(`${this.state.username.toUpperCase()}! YOU! SHALL! NOT! PASS! \nUsername wasn't found. Try again.`);
        this.setState({
          username : ''
        });
      } else {
        console.log("CLIENT |",response.data.rows);
        this.setState ({
          campaigns: response.data.rows,
          masterid : response.data.rows.length > 0 ? response.data.rows[0].masterid : null,
          loggedIn: true
        });
      }
    })
    .catch( err => {
      console.log('Error: ', err);
      // alert(`${this.state.username.toUpperCase()}! YOU! SHALL! NOT! PASS! \nUsername wasn't found. Try again.`);
      this.setState({
        username : ''
      });
    });
  }


  addedCampaign(e) {
    // e.preventDefault();
    axios.get(`/campaigns/${this.state.username}`)
    .then (response => {
      // console.log("CLIENT | STATUS: Response recieved. | ROWS DATA:", response);
      if (response.data.rows.length === 0) {
        alert(`${this.state.username.toUpperCase()}! YOU! SHALL! NOT! PASS! \nUsername wasn't found. Try again.`);
        this.setState({
          username : ''
        });
      } else {
        console.log("CLIENT |",response.data.rows);
        this.setState ({
          campaigns: response.data.rows,
          masterid : response.data.rows.length > 0 ? response.data.rows[0].masterid : null,
          loggedIn: !this.state.loggedIn
        });
      }
    })
    .catch( err => {
      console.log('Error: ', err);
      // alert(`${this.state.username.toUpperCase()}! YOU! SHALL! NOT! PASS! \nUsername wasn't found. Try again.`);
      this.setState({
        username : ''
      });
    });
  }

  componentDidMount() {
  }

  render() {
    console.log(this.state);
    if (this.state.loggedIn === true) {
      return (
        <div>
          <div className="Title">
            <h1>Bard</h1>
            <h3>The Dungeon Master's Squire</h3>
          </div>
          <CampaignList addedCampaign={this.addedCampaign} username={this.state.username} masterid={this.state.masterid} campaigns={this.state.campaigns}/>
        </div>
      )
    } else if (!this.state.loggedIn) {
      return (
        <div>
          <div className="Title">
            <h1>Bard</h1>
            <h3>The Dungeon Master's Squire</h3>
          </div>
          <form>
            <label>
              username:<br></br>
              <input type="text" value={this.state.username} onChange={this.onChange}/>
            </label>
            <input type="submit" value="Submit" onClick={this.onSubmitUsername}/>
          </form>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));