# Templates

## For shows
- Section that has my review
- Section that has links to watching log notes
- Section that has links to worldbuilding or RPG creations based on the show (e.g. character ideas, plots, etc.)

## For worldbuilding
- usual trappings
- inspiration (did this comes from a show, article, personal, etc.).. linking if that original medium exists in obsidian
- RPG potential: flag it as useful for an rpg group and particular section. (in faisal group, this guy would be a good npc on planet xyz working for faction abc)
- RPG actual: flag where it's being used so we know it's already done

## for pdfs that I read for gaming
- Need to see what happens when i highlight and note things in the pdfs. I assume the process is that it gets tossed into Zotero Dumps.
	- From there, I have to move things right? Where am i moving it?
	- If i follow the same process as articles, the actual ideas and notes i craft from these annotation should go into their own independent files under the proper place (i.e. worldbuilding, rpg, etc.)
	- Then I think what this pdf annotation file should have is a reference table of all those notes that were created and listed out here in dataview method, right?
	- This file becomes the map of content towards everything else. It only technically has my original annotations, but it shows where i've used that knowledge elsewhere, as links to worldbuilding notes, rpg notes, etc.
	- Maybe another section in here could be a review of the doc, an overview, or some other thoughts about the doc itself.

## Characters? Or generic Notes?
- Information/fiction ideas/ should be objective stuff right? Atomic, stripped down, and generic so that it can then be applied to worldbuilding, creative endeavors, rpg campaigns, etc.
	- So, shouldn't have too much text within it, just to keep it as general as possible? Or do we need some basic touchpoints to establish what kind of person this character was in original medium?
- 
yaml ideas
- Source
- RPtags or general tags
	- protag, antag, npc, questgiver, serviceprovider, fodder, etc.?
- type: npc / character / villain / protagonist / or are these rptags?
- usage (unused, name_of_campaign_or_workpiece)
- alias
- 

# RPG properties and tags
## My motivation
obsidian://open?vault=DiaKnowledge&file=Figuring%20out%20how%20to%20break%20down%20rpg%20tables%20into%20usable%20content

There are so many books and resources that sometimes overlap in terms of ideas for similar things (mission types, npc ideas, obstacles, services, etc.). Wouldn't it be useful to have an overall consolidated list of each of those things, irrespective of source, but still tagged properly so you could recreate the specific table from specific source at any point?

## Thought process
Do rpgTags apply to everything? People, places, things, locations, planets, groups, factions, governments, etc.? Maybe we do need this, because we have such a broad range of things that need to be collated together. Then, we have extra props that drill down when there are necessary secondary levels of detail (e.g. rpgPlace to denote types of places, or rpgPerson to show types of npcs and people). Not everything will have a secondary prop (Obstacles can just be in rpgTags and that's enough.. we don't need to define different types of obstacles, right?)

WHAT ARE THE MAIN UMBRELLA CONCEPTS.. people, places, things, services?, roles?, factions, tasks or quests or missions, traits, genres?, system (swn, wwn, etc.), goal or purpose, reason or motivation?, fear or vulnerability?, obstacles or threats?, 

Let's do an example situation: cwn pp159, mission type Defense, with bunch of tables
so anything that comes out of here atomically, should have
reference: Cities Without Number book right?
rpgSystem: cwn
missionTag: defense

Then, each item will have extra props depending on where it comes from.. so, anything from "Twists to the Situation":
rpgTags: twist, obstacle?, issue?, something else?

If it were "What kind of patron" table:
rpgTags: patron, person
traits: traits to associate with each person, right?
person: the npc type they are

What about "What made them fearful"?
rpgTags: do we do threat? obstacle?

- place
	- planet
	- moon
	- station
	- city
	- site
- person (includes roles)
	- protag
	- antag
	- npc
	- support
	- patron
	- victim
	- generic
	- operator
	- leader
	- peasant
	- hacker
- traits
	- angry
	- yells
	- kind
	- ambitious
	- patsy
	- forceful
	- strong
	- weird
- tasks/missions/quests/
- services
- rpgTags
	- "world tag"
	- "mission tag"
	- person
	- place
	- obstacle

- Do we put ALL traits/characteristics in one place.. those for people, places, things, etc.?
	- yes, no need for multiples of the same thing.. instead we just have another prop that'll help with filtering (e.g. rpgTags: place and traits: will give us place traits)

## How do we tag things?
### things in fiction ideas
rpgTags: relevant tag.. person, place, idea or plot or obstacle or twist, etc.?
usage: potential, link to character that this is based on

### People
rpgTags: person
weight: number from 1-10
person: *insert tag related to type of person, their role*
relatedGroup: *insert related faction*
activeIn or location: *insert name of the place*
origin: name of place of origin
touchpoint: cultural/pop culture point of reference (or link to original fiction idea this person is based on)
relationPCs: 
condition: alive, dead, missing, 

INLINE: relation tags as needed (parent, child, boss, employee, etc.)
### Place
rpgTags: place
weight:
place: *type of place*
leader: 

INLINE: relation tags as needed (planet, sector, city, locale)

HQ of groups will be a dataview
related groups will be a dataview
related npcs will be a dataview

### Factions or Groups
rpgTags: group
group: faction, government, organization, religion, alien, 
headquarters: 
factionSize: hegemony or number?
factionGoal (because this is specific to Without Number), right?
factionAssets
factionTag (system-specific, we have same with world and mission, etc.)
location (all relevant places) (could be called activeIn)
leader
stats like cunning, force, hp, etc.
purpose, desire, trait

INLINE: relation tags

related npcs will be a dataview

### When it comes to related properties, you have to think about where the prop actually makes sense and will belong in every instance of that type of thing.
- When it comes to faction or place leader, every faction/place will need a leader property
- BUT, not every npc will have use of a isLeader property.. so we don't need to capture it as a prop here and instead pull the info later using dataview
- so how do we work out npcs, places, factions, etc.? Who gets the tag?
	- It makes sense that you don't want a dozen+ items in a prop.. so I wouldn't do a relatedNPCs tag in a place, when I could just do a relatedPlace tag in a person... people will generally be from one place, or living on one place
	- factionHQ follows the leader rule above.. so the faction has hq prop in it, since every faction should have one, but not every place will be an hq.
	- related places for a faction.. prop the Faction with locations.
- how do we show relation between a place that's a store, in a city, on a planet, in a sector, etc?
	- Maybe just location prop? This store is in location: city name... this city is in location: planet name.. planet is location: system name, and so on. Later, you can show all relevant points of interest in a system by telling the dataview to see where location=this.file.name, and maybe add an extra AND rpgTag=whatever relevant tag it's supposed to be (city, planet, etc.)
	- but not gonna know that xyz store is in abc system, right?
		- So location prop, and parent prop with list of places that are above it
	- This is solved with breadcrumbs plugin

### New issue: how to handle the relations field
- relations to npcs, pcs, factions, anyone else?
- -3 to +3 -- enemy / hostile / annoyance / neutral / cordial / friendly / ally
- relation type is something right? spy, employee, family, friend, rival, lover, crush, lapdog, obsession, boss, and so on?
- the thing is, how do you define one thing's relations with every other thing? I can't just say relations: (city abc, +1), (npc x, -3), (haghah, rival).. but that's the end result i desire.
	- That can't be done in props, but it can be done in dataview. The trick is how to make the props show that.
	- How do you reflect two things.. how do i name a thing and a rating for it, all in one prop?
		- allies: this place, that person, that group
		- enemies: this person, that group
		- but then you have to do seven of these to cover the -3 to +3 range.. and we're still not addressing the relation type thing.
* **Solution right now is breadcrumbs plugin**. Not my ideal but I'm not finding a better way right now.

## Rollable Tables
**- Check out obsidian discord and search for "Poor `GRUMPY` gnome. This is really cool and inspiring"**

# Latest thing to work on:
- What I'd love to do, is that each factiontag, worldtag, etc., is going to make up these properties of 3 or 4 items (E.g. enemies).. I want to convert those items into links that go in the proper enemies folder, each one having yaml that references the original factiontag/worldtag it came from.
	- this might be a templater thing
	- **done**

- **look at metadatamenu plugin**

- **also check out metaedit**, could be useful for making suggestions and list of things to choose from when adding meta, right?

- **Read about agitprop**

- **leverage content**

**- there are sections in OneStopShopWriters thesaurus that could be worked on (e.g. hobbies, list out all the individual hobbies and give them a category property, instead of lists within category notes as it is now)**

# PROPERTIES VS TAGS VS LINKS VS FOLDERS
- **Tags are verb-based... period**.
	* addthis
	* dothat
	* workonthis
	* convertthat
	* researchmore
- Tags can be placed anywhere, so utilize this unique function.
- I'll never intend to mark something in a text as hashtag-npc... because what I'm really asking here is hashtag-addnpc.. I'm marking for myself to take this text and put it as its own npc note. That makes more sense.

**Reference vs Source (both properties)**
- Reference is tracing back to where I get something internally (from this show, article, podcast, etc. that has a note internally)
- Source is tracing back to how something came into my system (from clipping, twitter, pocket, reader, manual, snipd, etc.)

