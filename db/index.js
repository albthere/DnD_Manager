const { pool } = require('./postgres_queries.js');

getCampaigns = (username, cb) => {
    console.log("DB:", username);
    let text = `select masterid from bard.masters where username = \'${username}\'`;
    pool.query(text, (error, results) => {
        if (error) {
            console.log(error);
            cb(error, null);
        } else {
            let id = results.rows.length === 0 ? 0 : results.rows[0].masterid;
            let mastertext = `select * from bard.campaigns where masterid = ${id}`;        
            pool.query(mastertext, (error, results) => {
                if (error) {
                    cb(error);
                } else {
                    cb(null, results);
                }
            });
        }
            // cb(null, results);
        
    });
};



module.exports = { getCampaigns };

// CREATE TABLE bard.players (
//     playerid SERIAL PRIMARY KEY,
//     level INTEGER,
//     username TEXT,
//     race TEXT,
//     classtype TEXT,
//     attributes JSON,
//     skills JSON,
//     talents JSON,
//     background TEXT,
//     equipment JSON,
//     campaignid INTEGER REFERENCES bard.campaigns (campaignid)
// );

// CREATE TABLE bard.masters (
//     masterid SERIAL PRIMARY KEY,
//     username TEXT
// );

// CREATE TABLE bard.campaigns (
//     campaignid SERIAL PRIMARY KEY,
//     masterid INTEGER REFERENCES bard.masters (masterid),
//     lore Text,
//     notes Text,
//     journal JSON,
//     quests JSON,
//     loot JSON
// );
