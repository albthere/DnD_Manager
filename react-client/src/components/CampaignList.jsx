import React from 'react';
import axios from "axios";
import Campaign from './Campaign.jsx';

class CampaignList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCampaignClicked : false,
            currentCampaign : {},
            campaignName : '',
            lore : '',
            notes : '',
            journal : '',
            quests : '',
            loot : ''
        };
        this.onChangeCampaignName = this.onChangeCampaignName.bind(this);
        this.onChangeLore = this.onChangeLore.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeJournal = this.onChangeJournal.bind(this);
        this.onChangeQuests = this.onChangeQuests.bind(this);
        this.onChangeLoot = this.onChangeLoot.bind(this);
        this.submitCampaignClicked = this.submitCampaignClicked.bind(this);
        this.campaignClicked = this.campaignClicked.bind(this);
        this.newCampaignClicked = this.newCampaignClicked.bind(this);
    }

    onChangeCampaignName(e) {
        e.preventDefault();
        this.setState({
            campaignName : e.target.value
        });
    }

    onChangeLore(e) {
        e.preventDefault();
        this.setState({
            lore : e.target.value
        });
    }
    
    onChangeNotes(e) {
        e.preventDefault();
        this.setState({
            notes : e.target.value
        });
    }

    onChangeJournal(e) {
        e.preventDefault();
        this.setState({
            journal : e.target.value
        }); 
    }

    onChangeQuests(e) {
        e.preventDefault();
        this.setState({
            quests : e.target.value
        }); 
    }

    onChangeLoot(e) {
        e.preventDefault();
        this.setState({
            loot : e.target.value
        }); 
    }


    campaignClicked(e) {
        e.preventDefault();
        this.setState({

        });
    }

    newCampaignClicked(e) {
        this.setState({
            newCampaignClicked: !this.state.newCampaignClicked
        });
    }

    submitCampaignClicked(e) {
        e.preventDefault();
        const fn = () => {
            this.props.addedCampaign();
        };
        axios.post('/addCampaign', {
            masterid : this.props.masterid,
            lore : this.state.lore,
            notes : this.state.notes,
            journal : this.state.journal,
            quests : this.state.quests,
            loot : this.state.loot,
            campaignname : this.state.campaignName
        })
        .then(function (response) {
            console.log(response);
            fn();
          })
          .catch(function (error) {
            console.log("CLIENT |", error);
          });
        
    }

    render() {
        const campaigns = this.props.campaigns;
        const username = this.props.username;

        if (this.state.newCampaignClicked) {
            return (
                <div>
                    <h3> Let's Create a New Campaign! </h3>
                    Dungeon Master:
                    <br></br> 
                    {username} 
                    <br></br>
                    <br></br>
                    
                    <form>
                        <label>
                        What should we call this campaign?
                        <br></br>
                        <input type="text" value={this.state.campaignName} onChange={this.onChangeCampaignName} />
                        </label>
                        <br></br>
                        <br></br>

                        <label>
                        What's the world like in this campaign? The lore?
                        <br></br>
                        <input type="text" value={this.state.lore} onChange={this.onChangeLore} />
                        </label>
                        <br></br>
                        <br></br>

                    
                        <label>
                        Any private notes (surprise events, monsters, tricks, etc)? *Only you see these notes.
                        <br></br>
                        <input type="text" value={this.state.notes} onChange={this.onChangeNotes} />
                        </label>
                        <br></br>
                        <br></br>

                        <label>
                        Anything to put in the shared Journal? *Everyone can see these notes.
                        <br></br>
                        <input type="text" value={this.state.journal} onChange={this.onChangeJournal} />
                        </label>
                        <br></br>
                        <br></br>

                        <label>
                        What main quests and sidequests will there be?
                        <br></br>
                        <input type="text" value={this.state.quests} onChange={this.onChangeQuests} />
                        </label>
                        <br></br>
                        <br></br>
                        
                        <label>
                        Any sweet loot we should know about?
                        <br></br>
                        <input type="text" value={this.state.loot} onChange={this.onChangeLoot} />
                        </label>
                        <br></br>
                        <br></br>


                        <input type="submit" value="Submit" onClick={this.submitCampaignClicked} />
                    </form>


                </div>
            )
        } else {
        return (
            <div>
                <h3> Campaigns </h3>
                <h4>You're dungeon master of <b>{campaigns.length}</b> {campaigns.length > 1 ? "campaigns:" : "campaign:"}</h4>
                ----------------
                    {campaigns.map((item, key) => <Campaign key={key} campaign={item} />)}
                <br></br>
                <button type="button" onClick={this.newCampaignClicked}>Create New Campaign</button>
                <br></br>
                <h4>You have <b>2</b> characters in <b>2</b> campaigns:</h4>
                <button type="button" onClick={this.newCampaignClicked}>Charlie</button> in
                <button type="button" onClick={this.newCampaignClicked}>Quest to Candy Mountain</button>
                <br></br>
                <button type="button" onClick={this.newCampaignClicked}>Trogdor</button> in
                <button type="button" onClick={this.newCampaignClicked}>Homestar Runner's Quest</button>
                <br></br>
                <br></br>
                <button type="button" onClick={this.newCampaignClicked}>Create New Character</button>*you will need an invite link from DM
            </div>
        )
    }
    }

}

export default CampaignList;