# Methods to choose from
- quartz https://quartz.jzhao.xyz
	- static site generator
	- free?
- obsidian publish
	- base model
	- cost
- digital garden plugin + github+ cloudflare pages?
	- https://sharaf.cc/40-49-toolbox/40-note-taking/40-01-obsidian/guides/publish-obsidian-vault-for-free/
	- free
- blot https://blot.im
	- cost

# Quartz
## Fresh Install
- Delete everything in old local repo on computer, except:
	- content folder
	- .gitignore file
	- quartz.config.ts file
	- quartz.layout.ts file
	- components folder
	- plugins/emitters?
	- static folder
	- styles folder

- Delete repo on github
- Make a new one
- do the install process for quartz
- Styles and css
	- author
	- base 
	- custom 
	- callouts 
- config file - colors
- layout file - some of it?

## Making things private 
- https://quartz.jzhao.xyz/features/private-pages
- gitignore file needs to reflect the folders and files
	- How to address spaces in file and folder names
		- This doesn't work: "content/DiaKnowledge/10 Indexes/Themed Logs/Kids Log.md"
		- This works: content/DiaKnowledge/10\ Indexes/Themed\ Logs/Kids\ Log.md
- quartz config file has ignorepatterns
	- set up plugin Plugin.ExplicitPublish which will filter out all notes except for any that have publish: true in the frontmatter.
	    filters: [Plugin.ExplicitPublish()],

## Files causing issues, but if you do the private stuff above, should be no longer an issue
- had to mess with some files to get quartz to work. Be sure to change these back later:
	- handlebar templates - faction assets
	- handlebar Template - World Tags - Process Persons
	- Handlebar Template - World Tags - Process Rest
	- Zotero Integration Template
		- move the out of place property back in to frontmatter

## Pages to remember
- Good examples of other sites
	- https://jzhao.xyz/books
- tutorials
	- https://be-far.com/Projects/Obsidian/digital-garden
	- https://kanpov.github.io/articles/creating-blog-site-with-quartz4-obsidian
	- https://quartz.jzhao.xyz/hosting#cloudflare-pages
- Github Page: https://github.com/ahmaddialdin/knowledge
- Cloudflare Page: https://dash.cloudflare.com/19e8fac75d200044571efec98ea740e2/workers-and-pages
- for cname record once we make the cloudflare page
	- https://panel.dreamhost.com/index.cgi?via_fastsearch=1&tree=domain.dashboard#/site/ahmaddialdin.com/dns

## Githubs to crib from
This dude has a nice design that I grabbed a buch of style stuff from
https://github.com/freenandes/topo-da-mente/

Main quartz dude
https://github.com/jackyzha0/quartz

Potentially useful for design ideas
https://github.com/Socratica-Org/toolbox

## terminal and github tips
### When using terminal, any files/folders with spacing in them needs quotation marks
### When something gets uploaded and you want to remove it from github:
- Remove it from computer folder/location
- do a npx quartz sync
- If you want to still have that file/folder still on computer, then add it to the .gitignore file before returning it to its original location
	- There is the alternate option to do the draft:true property, but that keeps it in github while preventing it from getting published on website. So, might be okay if you dont mind having it in github.
### When you want to remove something from being committed?
- git rm --cached (filepath and name)

## Customization / Troubleshooting
### Nav Bar
https://notes.camargomau.com
https://github.com/camargomau/notkesto-site
- 

### Hide "x items under this folder" in folder page
- FolderContent.tsx file
	- showFolderCount: change from true to false

### Sidebar Scrolling
- If you find the sidebar doesn't scroll, fix in base.scss:
	- under &.sidebar.. **height** should become **min-height**
	- also, do a clear cache for website (double check by going to incognito mode)

### For color schemes
https://discord.com/channels/927628110009098281/1205066819170336808/1205082850811052063
https://www.realtimecolors.com/
Use below for exporting (it's not perfect.. need more definitions though)
```
colors: {
  lightMode: {
      light: "${bgL.hex}",
      dark: "${textL.hex}",
      secondary: "${secondaryL}",
      tertiary: "${accentL}"
    },
  darkMode: {
      light: "${bgD.hex}",
      dark: "${textD.hex}",
      secondary: "${secondaryD}",
      tertiary: "${accentD}"
    },
  },
```

### If i want to use custom date-modified
https://discord.com/channels/927628110009098281/1149197588084572161/1197929960745214103
- https://github.com/xy-241/CS-Notes/commit/4fcbc28192bf3641fb2ac0bf3c55190bbbd2fd0a#diff-c4a1f1305c12e56f02e5d490587be80c27bbb8965960ace98f85796df8335efb
- Just follow the above changes (mostly.. might need to adjust as quartz gets updated, and might need to remove anything about reading time)
### Properties display
These two as far as i can tell are the same, and I grabbed the properties stuff from the first one.
https://github.com/Confidaunt/quartz_Nystar/
https://github.com/natashayasi/quartz/
- just make sure to add properties in layout.
### If I want wiki side box
https://discord.com/channels/927628110009098281/1149197588084572161/1200415703707172874 
- Use callout wiki
- add cssclasses property including: wiki-right, rside-10

### Can sidenotes be done? Doesn't seem so just yet.

### for any folder, i could add a index.md file with frontmatter field title: nameoffolder, and it'll become the homepage for that folder
- content/tags/nameoftag.md allows for a page explaining that tag
### css
#### specific page css:
body[data-slug="index"] article h3 {
color: blue;
}

#### All pages css:
h3 {
color: blue;
}

#### all document/article type pages css:
article h3 {
color: blue;
}

# Tasks
- **Go through articles that have None as the highlight ID and need to address that**
- **need to fix how topics are shown.. they need to be capitalized in order to backlink right.. also fix colonialism/colonization**
	- Need to figure out from discord/yepayepayepa how to resolve backlinks that show up in frontmatter
- **what to do about highlight links that supposedly go directly to my readwise reader? is that good? bad? how to address?**
	- Eleanor has the highlights and they just error out.. so i could put a comment about that and not deal with it
		- reader pages can be made public, but it seems to be individual effort. 

# Thinking out loud
- Title of website.. Speaking in Draft
- Is this space purely for the bigger questions about life and stuff? 
	- I have things that I look at that's more... easy-going, such as shows, videos, boardgames, videogames, etc. that I wouldn't mind talking about without it always being in the greater good lens.
	- Maybe that's the key.. to show thing based on the lens. Do the site in reflection of my views around lenses.. after all, I want to talk about Nimona, for example, but it's partially because it's a fun movie, partially because it has good storytelling/characters, and partially because it gets into the questioning of status quo and how the systems are the problem. That's many lenses that can be reflected accordingly.
	- After all, nothing is just one thing. 
	- So where do I put things like logs (watching, listening, conversations, etc.).. this is basically my raw input that can then get processed or that can generate new interest, conversations around, etc.
- Also, I want to generate conversations around anything.. so if I'm reading a certain article, I wouldn't mind there being some ability to engender a conversation around it, or any other thing that I add to a log.
	- use things like commento or so on
	- *Did this topic remind you of anything? Please send that thing to me, even if you think I might have seen it before! I'm eager for leads and references, even if it's only tangentially related. Some of the best messages I receive begin with “This is kind of random, but this reminded me of...”*
- Front facing thing is the newsletter, using button or whatever. Let's start with a weekly briefing, collating the logs into my weekly dump of things I've consumed and highlighted, and things I've written about.
- So here's a thought, the weekly piece should only be things I've read, right? Would a media diet be boring to have every week, and so instead make that a monthly separate thing?
	- And do we even make a distinction between movies/shows/games/podcasts vs youtube videos? I think yes?
- Backend is the quartz website itself.. the notes, the input, the logs, the works in progress.

## What's my flow of knowledge?
Raw input (things i read, talked about, watched, etc.)
|
Processing/highlighting
|
Converting highlights to claims and evidence
|
Collecting claims to answer questions, or sections within a question
|
Making new outputs and musings and thoughts and writings utilizing claims, referencing input, and all thru multiple lenses.. all in service of answering questions

Each lens page would have sections for
- highlighted inputs
- claims/evidence
- written outputs

Each questions page would have sections for:
- claims/evidence
- written outputs
Am I right in assuming that questions wouldn't be tied to inputs? Well, not necessarily. Not all inputs would be directly related to a question, but potentially there could be a few. Some could be direct, some could have a claim within it that's related.

### What would that look like? 
- Post each week would have:
	- Some idle thoughts at the start
	- List of links to things I've read, with commentary
	- Maybe list of things I've watched/listened to/played?

Simon Willison talks about categories of content, and how there are:
- Things I learned
	- For him, these are software tips and tricks and tactics.
	- Is my equivalent my questions and highlights?
- Descriptions of my projects
- Things I've found
	- These are just things that are found online and re-linked basically. A public bookmarking system.

He also says:
"Sharing interesting links with commentary is a low effort, high value way to contribute to internet life at large." 
I should try to embrace that, instead of feel like what I want to do is less-than, or just regurgitating stuff.
After all, the value is in highlighting someone's effort and work, and adding my own insight to it. We build together.
Keep in mind to add people's names as much as possible. Showcase them as well as their work.

This is making me think about the difference between category 1 and 3, when it comes to an article for example.
- Sharing the article itself and giving a summary on it, that's category 3.. something I've found.
- Sharing the highlights and insights and bigger picture stuff to lenses and questions, that's category 1.. something I've learned. This isn't necessarily a link to an article, but my own writing? Yeah, this is my own blog post, writing, essay, etc.

**Log.. Weekly Log / Something** but this log would be a set of entries, not necessarily daily, right? Maybe a weekly one that I add to throughout the week, then publish it in newsletter at end of week as a post?

January 5-11, 2025:
I had a conversation about
- Cultural values

I watched
- Venom 2. Great flick, best of the trilogy, etc. etc.

I listened to
* ??

I read
- ??

On the site, I worked on:
- New questions
- New articles
- Continued work on articles
- Processed some inputs
- Worked on some questions?

Overall pages would be:
Logs
Conversations
Books
Shows
Movies
Podcasts
Articles
Questions
Lenses


Weekly Log Overall (this would go out as newsletter right? Or this would be the main content of it at least)
Read
Watched
Listened
Made

Each of those is pulling from
xyz Log:
2025-W2, Jan 8-14
- thing
- thing 2
- la dedo

2025-W1, Jan 1-7
- this thing
- that thing
- article about
- book on

# Steps for making this a bit more private
- need a domain thru nal.la
	- house of wisdom
	- dar alhikma
	- community of wisdom
	- communal wisdom
	- oasis of wisdom
	- oasis of knowledge
	- data jinn
	- info jinn
	- knowledge jinn


These are all variations on the House of Wisdom and have .com options (which seems to be the best dot-thing go with over others, even if it forces me to jump some hoops with the wording):
	- dar of wisdom.. (mixed language might be an issue)
	- house of wisdom and curiosity.. (very long)
	- cabinet (or cabinets) of wisdom (more esoteric than house of wisdom, but in arabic the famous place was also referred to as خزائن الحكمة which is why it's an option)
		- apparently cabinet of curiosities is a thing, so now i want a long one..  cabinet of wisdom and curiosities
		- 

Otherwise I veer away from that theme totally and try something else, but not sure what yet.

I'm trying to think of a new domain to anonymize my reading notes and potential writings, just to avoid getting into any trouble if i get touchy with the subject matter. So trying to find a new domain to get.

I want to reflect:
- knowledge, information, wisdom, data
- something social, like society, tribe, community.. to reflect that I want communal-built knowledge
- curiosity would be nice to reflect
- if i can pull a little arab world into it, like house of wisdom, that would be thematic