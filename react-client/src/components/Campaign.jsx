import React from 'react';

class Campaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaignClicked : false
        };
        this.onClick = this.onClick.bind(this);
        this.JSONparseObject = this.JSONparseObject.bind(this);
    }

    onClick(e) {
        let toggle = !this.state.campaignClicked;
        this.setState({
            campaignClicked : toggle
        });
    }

    JSONparseObject(obj) {
        let toUse = '';
        for(let k in obj) {
           toUse += `${k}: ${JSON.stringify(obj.k)} | `;
        }
        return toUse;
    };

    render() {
        let campaign = this.props.campaign;

        if (!this.state.campaignClicked) {
            return (
                <div>
                    
                    <button type="button" onClick={this.onClick}>{ this.props.campaign.campaignname }</button>
                    <br></br>
                    ----------------

                </div>
            )
        } else {
        return (
                <div>
                    <h4>{campaign.campaignname} <a href="http://localhost:3011/FinalerFantasyX|3.html"><button type="button" onClick={this.campaignClicked}>Play Campaign!</button></a></h4>
                    
                    Lore:
                    <br></br>
                    {campaign.lore}
                    <br></br>
                    <br></br>

                    Notes: 
                    <br></br>
                    {campaign.notes}
                    <br></br>
                    <br></br>

                    Journal: {
                        Object.keys(campaign.journal).map(key => {
                            let item = campaign.journal[key];
                            return <ListItem points={item} k={key} />                                
                        })                        
                    }
                    <br></br>                    

                    Quests: 
                    <br></br>
                    {
                        Object.keys(campaign.quests).map(key => {
                            let item = campaign.quests[key];
                            return <ListItem points={item} k={key} />                                
                        })
                    }
                    <br></br>

                    Loot: {
                        Object.keys(campaign.loot).map(key => {
                            let item = campaign.loot[key];
                            return <ListItem points={item} k={key} />                                
                        })                        
                    }
                    <br></br>

                    Players: 
                    <br></br>
                    Oppoolehnse (youOwnEverything34), LizzLemon (dndlVR23), LizardMan (albthere4u)
                    <br></br>
                    <br></br>
                    <button type="button" onClick={this.onClick}>collapse ^</button>
                    <br></br>
                    ----------------

                </div>
        )
    }
}
}

const ListItem = (props) => {

    let JSONparseObject = obj => {
        let toUse = '';
        for(let k in obj) {
           toUse += `${k}: ${obj.k.toString()} | `;
        }
        return toUse;
    };

    return (
    <div>
      <b>{ props.k }</b>: { typeof props.points === "object" ? JSONparseObject(props.points) : props.points.toString() }
    </div>
  )
}
export default Campaign;
