
CREATE TABLE bard.players (
    playerid SERIAL PRIMARY KEY,
    level INTEGER,
    username TEXT,
    race TEXT,
    classtype TEXT,
    attributes JSON,
    skills JSON,
    talents JSON,
    background TEXT,
    equipment JSON,
    campaignid INTEGER REFERENCES bard.campaigns (campaignid)
);

CREATE TABLE bard.masters (
    masterid SERIAL PRIMARY KEY,
    username TEXT
);

CREATE TABLE bard.campaigns (
    campaignid SERIAL PRIMARY KEY,
    masterid INTEGER REFERENCES bard.masters (masterid),
    lore Text,
    notes Text,
    journal JSON,
    quests JSON,
    loot JSON,
    campaignid TEXT
);



playerid | level | username | race | classtype | attributes | skills | talents | background | equipment | campaignid

INSERT INTO bard.players (level,username,race,classtype,attributes,skills,talents,background,equipment,campaignid) VALUES(5,'lulumage','elf', 'mage','{"mag":5,"def":1,"spd":3,"mdf":4}','{"fire":"casts fire","blizzard":"casts blizzard."}','{"focus":"increase magic."}','The mage with the beltiest dress.','{"moogle_doll": 1}',1);

INSERT INTO bard.players (level,username,race,campaignid) VALUES(3,'bobawarrior','hooman',2);


INSERT INTO bard.masters (username) VALUES
    ('bobawarrior');

    INSERT INTO bard.campaigns (masterid,lore,notes,journal,quests,loot,campaignname) VALUES
    (1,'Them things behind that squishy wall are gon get you.', 'This town needs more cops.', '{"Beginning":"People gone missin.", "items":[{"name": "lights","qty": 1,"desc":"to see better"}, {"name":"flashlight","qty": 1, "desc":"to see better, mobile"}]}','{"start":"Will has gon missin!", "goal":"Find Will.", "current":"Um, where is Barbara. Have not seen here for a quick minute."}', '{"bikes":{"type":"mount","qty": 1, "raritylevel":"common"}}','Strangerer Things');

INSERT INTO bard.campaigns (masterid,lore,notes,journal,quests,loot) VALUES
(2,'Gotta catch em all.', '10 yr kid ruling the world by enslaving animals and forcing them to fight?!', '{"pokemon":["rattata","pikachu","pidgey"]}','{}','{}');

"{}"

{/*                     

                    What's the lore and world of this campaign?
                    Any key notes we should be aware of?
                    Anything to put in the Journey Journal?
                    What quests will there be?
                    What loot items are there? */}