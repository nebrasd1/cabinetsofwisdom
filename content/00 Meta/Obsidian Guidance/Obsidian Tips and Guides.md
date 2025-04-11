# Aligning columns in tables inside dataviewjs
// change column width
this.container.querySelectorAll(".table-view-table td").forEach(s => s.style.width ="300px");

# Dataview on showing list of things with headers breaking the table into groups
table L.file.link as "Name",
L.location as "Location"
FROM "folder path"
WHERE contains(rpgTags,"place") and location = this.file.link or location.location = this.file.link
GROUP BY place as "Place Type"
FLATTEN rows as L
SORT file.name ASC

## Another way
dataviewjs

const notes = await dv.query (`
TABLE 
  L.file.link as Name, L.location as Location
FROM
  "70 RPGs/73 Faisal D&D Group/73.3 Places"
WHERE
  contains(rpgTags,"place") and location = this.file.link or location.location = this.file.link
GROUP BY
  place
FLATTEN rows as L
SORT place, L.location
`)

console.log(notes)

if (!notes.successful) {
  dv.paragraph(`~~~~\n${ notes.error }\n~~~~\n`)
  return
}

let typeDict = {}
for (let note of notes.value.values) {
  if ( !typeDict.hasOwnProperty(note[0]) )
    typeDict[note[0]] = []

  typeDict[note[0]].push([...note.slice(1)])
}

for (let key of Object.keys(typeDict)) {
  dv.header(2, key)
  dv.table([...notes.value.headers.slice(1)],
    typeDict[key])
}
this.container.querySelectorAll(".table-view-table td").forEach(s => s.style.width ="300px");

---
# Joining a list of only properties which are TRUE
  nonnull(list(
    choice(hasSystem, "System", null),
    choice(hasLocation, "Location", null),
    choice(hasHabitability, "Habitat", null),
    choice(hasMinerals, "Minerals", null),
    choice(hasExoticFloraFauna, "Flora & Fauna", null),
    choice(hasLabor, "Labor", null),
    choice(hasExoticTech, "Exotic Tech", null),
    choice(hasRuins, "Ruins", null)   
    )) as Resources

---

https://youtu.be/nO5N_x2so0g?list=PLGflcghBUIauy2We-93G3u8PQdx2DRSJi
This video above gave me some ideas below:

# Should i have an insights folder in the information section?
A place where i put my insights, not required to be attached to any topic yet, but most likely will be... but for now my own insights can be their own notes?
Why wouldn't I do this? Where else would these insights go, except maybe the topic itself?
And I assume I should differentiate between claims I extract as annotations from things I've read, versus whole cloth insights I'm writing up on my own (while heavily based on and referencing things I've read in first place)... right?

# Index of article ideas
dataview
table file.size
from "whatever folder will host my list of seed notes"
where current-status = "seed"
sort file.size desc

This has to go hand in hand with how I template articles though.
They need metadata (either in yaml or otherwise)
- type: "article"
- current-status: "seed"
- ?status-updated: insert date?

---

https://medium.com/obsidian-observer/meta-bind-plugin-how-to-take-notes-about-clients-in-obsidian-3280ae58edc2
- Useful for learning about meta bind plugin and making configurable inputs that affect the metadata

https://s-blu.github.io/basic-dataview-query-builder/
- Dataview query builder 


TABLE file.inlinks AS Inlinks, file.outlinks AS Outlinks, file.tags AS Tags
FROM "Readwise"
WHERE length(file.inlinks) > 0 OR length(file.outlinks) > 1 Or length(file.tags) > 2
SORT file.size ASC

---
https://youtu.be/wB89lJs5A3s

## MOC
MOCs are a guide, not a regurgitation of links.. it doesnt have to show the entire list of links, but rather curated
- Concept 1
	- Note
	- Note
- Concept 2
	- Note
	- Note
	- Note
- Writings related to this MOC
- Quotes related to this MOC
- Media related to this MOC

More ideas of things to put in an MOC
- References (i.e. all highlighted articles and mediums related to this topic)
- The claims related to this topic (e.g. annotations which are usually extracted from those articles)
- Personal notes, daily notes, etc. that reference this thing
- My own writings related

---
## Daily Note vs Theme Note

## Tags:
Tags are soft links
used for large contextless groupings / or for status indicators / maybe some backend stuff.. examples below:
🗺️ - MOC
📝 - my note
📥inbox stuff (for sources of info that are unprocessed?).. think about this one a bit

## Hard Links:
Double bracket links are hard links
Used for linking to direct connections  

## Templates:
- new generic note template
	- The Thought
		- Notes
		- tl;dr
		- Chewing on It
		- Refined Version
	- Relevant Context
	- What Led Me Here
- note template based on input (article, video, book, etc etc)

---
https://www.youtube.com/watch?v=rm_BDdEPR8w

Accountability timer
- Deadlines matter, just to get you publishing and sharing

Zeignarik's Effect?

Ctrl-N remap to quick add that lists my main templates:
project, topic, personal, person, seedling, draft, source, idea, area, etc.

---
https://www.youtube.com/watch?v=8sxyYbh5mio
Research to Notes to Stories feat. Eleanor Konik

## Her Vault 2021:
* 00 Meta
	* 01 Attachments
	* 02 Pending
	* 03 Structure
	* 04 Templates
	* 05 Tools
	* 06 Tasking
	* 07 Process
	* 08 Platform
* 10 Dated
	* 11 Daily Roundups
	* 12 Feedback
	* 13 Monthly Roundups
* 20 Personal
	* 21 Parenting
	* 22 School
	* 23 Teaching
	* 24 Taxes
	* 25 Legal
	* 26 Medical
	* 27 Houses
	* 28 Events
	* 29 Activism
* 30 Interests
	* 31 Programming
	* 32 Games
	* 33 Gardening
	* 34 Writing
	* 35 Cooking
* 40 Slipbox
	* 41 Questions
	* 42 Zettels
	* 43 References
		* 43.01 Books
		* 43.02 Articles
		* 43.03 Discussions
		* 43.04 AV
		* 43.05 PDFs
* 50 Worldbuilding
	* 51 World 1
	* 52 World 2
* 60 Characters
* 70 Newsletters
* 80 Stories
* 90 Articles
	* 91 Images
	* 92 Recurring
	* 93 AskHistorians Answers
	* 94 WIP
	* 95 Nonfic Markets
	* 96 Published

Her Vault from website (partial):
- 00 Meta
	- 02 Templates
	- 03 Guidance
	- 04 Datascopes
		- [[Priority to Process]]
- 10 Indexes
	- 12 Tools
	- 13 Stories
	- 14 Logs
	- 15 Tasks
- 20 Information
	- 21 Entities
	- 25 Bare
	- 26 Annotated
	- 27 Questions
	- 28 Concepts
	- 29 Claims
- 30 Worldbuilding
	- 31 People
	- 32 Places
	- 33 Groups
	- 34 Events
	- 35 Thing



# MOC
## Source (article, eg.)
### note itself with quoted input and my thoughts (single claim per note) (title is regular sentence and not title case style, usually the **claim** i'm making)
- Within that note, have the quote material and source info (this is the **evidence**), and additional expounding/details as needed.
- Potentially I assume it'd be useful to have links to other supporting claims and evidence from the vault.

Below is example:

> [!quote] [Title](link) by [[author]] via [[publication]]. Published on date. Accessed on today.
> Text of the quote.

Brief explanation of why I saved this quote, and any other associated thoughts it gave me about connections, expansions, etc. The annotation, basically.

//

Use [[Priority to Process]] as a way to manage what comes in from readwise (need to change the watch folder though)

The processing:
- Look at the metadata and make sure it's good, has right tags
- Look at highlights and make sure context and content make sense
	- Consider how a highlight is _evidence for a claim_. 
- consider more tags of action, such as pkm/processing, pkm/xref, pkm/explore, etc.
- each highlight will have an id number as its title, so once i've figured out what claim a highlight is making, i'll put that as a sentence after the id number
- make a new note that's named as the claim
- Embed the relevant section into this new note.. i think either ![[]] style, or ##idnumbers in double brackets
- 
- 
//

metadata to classify things (location, creature, drug, organization, etc.)

A thing can be a MOC, which is curated and displays a few concepts and links ala wiki or so, to help give a fully curated experience around the topic.
But I still need an uncurated index/log of all things related to that same topic, where i've been shoving all info and thoughts and stuff about it.
So, MOC Capitalism, but also Index Capitalism.


---
Article about how to better take notes on articles and make use of my highlights

https://www.eleanorkonik.com/the-konik-method-for-making-notes/#methods-how-to-record-information-in-useful-ways

[Eleanor Konink Readwise Settings](https://gist.github.com/eleanorkonik/1f0586fe13d98f1dbf18ec72b00bf37d?ref=eleanorkonik.com)- Used this for my readwise settings as of 2023-17-07.
[Eleanor Konink Process Highlights User Script](https://gist.github.com/eleanorkonik/17ee7e5178d8095b9630b812d9b3226f?ref=eleanorkonik.com) - Used this for processing highlights into claims.

# Readwise Settings

## Page Metadata
```
>[!note]- Readwise Information
>Author:: {% if author %}[[{{author}}]]{% endif %}
>Imported:: [[{{date}}]] from {{source}}
>Title:: {{full_title}}
>Link:: https://readwise.io/bookreview/{{book_id}}
>Type:: Readwise/type/{{category}}
>Readwise-Source:: Readwise/source/{{source}}
>Last-Highlighted-Date:: [[{{last_highlighted_date|date('Y-m-d')}}]]
{% if url -%}
>Source-URL:: {{url}}
{% endif -%}
---

## Linked Notes from Around My Vault
(NOTE Ahmad, insert ``` here and at end of dataview) dataview
LIST
FROM [[{{title|replace(""","")|replace(""","")|replace("'","")|replace("'","")|truncate(127)}} by {{author|truncate(120)}}]]

{% if document_note -%}
---
## Document Notes
{{document_note}}

{% endif -%}
---

```

## Highlights Header
```
{% if is_new_page %}
## Highlights 
{% elif has_new_highlights -%}
## New highlights added [[{{date|date('Y-m-d')}}]] at {{time}} 
{% endif -%}
```

## Highlight
```
### {% if highlight_location != "View Highlight" and highlight_location != "View Tweet" %}{{highlight_location}}{% else %}id{{highlight_id}}{% endif %}

> {{ highlight_text }}
{% if highlight_note %}
- [n] {{ highlight_note }}
{% endif %}
{% if highlight_tags %}
{% for tag in highlight_tags %}[[{{tag}}]] {% endfor %}{% endif %}
{% if highlight_location and highlight_location_url %} * [{{highlight_location}}]({{highlight_location_url}}){% elif highlight_location %} ({{highlight_location}}){% endif %}

```

## Yaml
```
alias: {{full_title}}
date: {{date}}
cssclass: admonitions
tags: process
type: {{category}}
source: {{source}}
author: {% if author %}"[[{{author}}]]"{% endif %}
topics: {% for tag in document_tags %}
  - "[[{{tag}}]]" {% endfor %}
```

## Sync
```
## {{date|date('Y-m-d')}} {{time}} — Synced {{num_highlights}} highlight{{num_highlights|pluralize}} from {{num_books}} document{{num_books|pluralize}}.
{% for book in books %}- [[{{date|date('Y-m-d')}}]]: {{ book.num_highlights_added}} highlights from [[{{book.title|replace(""","")|replace(""","")|replace("'","")|replace("'","")|truncate(127)}} by {{book.author|truncate(120)}}]]
{%endfor %}

```
