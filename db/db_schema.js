
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
    loot JSON
);



playerid | level | username | race | classtype | attributes | skills | talents | background | equipment | campaignid

INSERT INTO bard.players (level,username,race,classtype,attributes,skills,talents,background,equipment,campaignid) VALUES(5,'lulumage','elf', 'mage','{"mag":5,"def":1,"spd":3,"mdf":4}','{"fire":"casts fire","blizzard":"casts blizzard."}','{"focus":"increase magic."}','The mage with the beltiest dress.','{"moogle_doll": 1}',1);

INSERT INTO bard.players (level,username,race,campaignid) VALUES(3,'bobawarrior','hooman',2);


INSERT INTO bard.masters (username) VALUES
    ('bobawarrior');

    INSERT INTO bard.campaigns (masterid,lore,notes,journal,quests,loot) VALUES
    (1,'Spira is being attacked by Sin. People need to be sent to farplane.', 'Blitzbll season is open!', '{"beginning":"Encountered Valefor", "items":[{"name": "potion","qty": 6,"desc":"+100hp"}, {"name":"antidote","qty": 5, "desc":"cures poison"}]}','{"start":"Left Besaid Island", "goal":"Get off island, to Kilika.", "current":"Just encountered Kimahri Ronso! Testing our strength."}', 
'{"summoner":"Get all aeons."}', '{"bangle":{"type":"mage armor","qty": 1, "raritylevel":"common"}}');

INSERT INTO bard.campaigns (masterid,lore,notes,journal,quests,loot) VALUES
(2,'Gotta catch em all.', '10 yr kid ruling the world by enslaving animals and forcing them to fight?!', '{"pokemon":["rattata","pikachu","pidgey"]}','{}','{}');