# Useful Links
https://regex101.com
https://jsonlint.com
https://copyprogramming.com/howto/using-regex-to-split-string-by-different-characters-based-on-occurance#splitting-camelcase-with-regex
https://stackoverflow.com/questions/21770009/filename-without-extension-in-batch-script
# How to exclude text:
- Place it within parentheses and beginning with ?!
- Use | if you want to exclude other words to exclude
- (?!*text to exclude*|*if you have other text to exclude*)

- Use group () when you want to specify something that's getting changed
- If you have a word in quotation marks, and you want to remove the marks, capture it like this:
	- "(\w+)" *note there is a forward slash before the w there*
- Then you just say you want to replace that with the group result, sans the quotations marks
	- Refer to the group with a \1 (forward slash 1)
* Another way to think about it, keep whatever you want within the parentheses, and then say replace with that group number.. it'll remove everything outside of the parentheses.

# Finding camelCase:
- (?<=[a-z])([A-Z])|(?<=[A-Z])([A-Z][a-z])

# Grab everything that doesn't match a certain pattern:
(^| )(?!PATTERN)[^ ]*

# Removing whole sections between {} that have certain property within them:
\{(\n.*\n    "property": "value"[^}]+)\},\n

# How to add yaml section above topmost text (ignore opening '):
` ([^\r\n]*)
---\n insertpropstuffhere \n---\n\1

# How to select everything in multiple lines between point1 and point2
point1[\s\S]*?(?=\n.*?point2)

# How to titlecase a sentence that's lowercase
## Make it uppercase first
`(table: )("\w.*)`
`\1\U\2`
## Convert to titlecase
`([A-Z])([A-ZÉ']+)\b(?<!any all-caps words you need excluded)`
`\1\L\2`

# Quick lowercase or uppercase of first letter
`^(\w)`
`\L\1`

---
# REGEX USED IN FACTION TAGS handlebar situation
delete tags=
s:\n    tags.*
r:

there is a { before first name
there is a } before next first name
delete first name above name=
^  \w.*
},\n{
CLEANUP: delete first most }, that got added

Find all words in quotation marks and give them single quotes, so they don't screw up future regex:
"([^"]*)" 
'\1'

Find and delete all html tags (you might need to individually find them to replace with spaces or not accordingly)
<\/?[^>]*>
*empty space*

apply "" to all things before and after =
= has to become :
(\w.*)=(\w.*)
"\1": "\2",

apply "" to all text lines in groups
      (\w.*)
      "\1",

groups of text lines needs a [ after the :
and a ] after last " but before ,
\n    (\w.*)
],\n    "\1":[
EXTRA CLEANUP
\.",],
.",
AND
,],
],
AND
,\n}
]\n}
AND ADD
]
} at the very end
AND CLEANUP
<\W.*> gets replaced with an empty space
AND CLEANUP
keep eye out for “ type of quotation mark
keep eye out for / and replace with or


---
# Regex for making the files for onestopforwriters folders
## Lowercase the all caps
([A-Z])([A-ZÉ']+)\b
\1\L\2

## remove line breaks
(\n)\n
\1

## Formatting
(\w.*)
echo >> "\1".md

Then use a notepad file, add echo off at the top, line break, then the content.
Name the file CreateNotepad.bat and save.

----
# Regex used for cleaning up onestopforwriters content

# Way to put things in brackets if they're not allcaps
, ([A-Z][\w()\-' ]+)
, [[\1]]
THEN
\* ([A-Z][\w()\- ]+), \[\[
[[\1]], [[

# COLORS or SHAPES or TEXTURES SECTIONS
lowercase stuff
` ([A-Z])([A-ZÉ']+)\b(?<!POV|CEO|ESP|PR|HIV|STD|IQ|ADHD|AIDS|OCD|FBI|GPS|^UN|EMP|DIY|PTA|PTSD|PTS|POW|YMCA|BAC|TV|^US|^ER)
\1\L\2

header 1
` ^([^,.]*):$
' # \1

 (Light Shades|Medium Shades|Dark Shades)
`# \1

 (Natural|Man-Made)
`# \1

(A Weak Example:|What's Wrong With This Example\?|A Stronger Option:|Why Does This Example Work\?|Why Does This Work\?|Why Is This Example Better\?) 
`## \1\n

bullet points
("|^)([A-Z](.*\)|[^.:]|(etc.)|(—\w.*)|(: \S.*))*$)
* \0

# MOST SECTIONS

Grab allcap traits to add brackets:
` (\b[A-Z-' ]+(([A−Z]+)|(?:\s+[A-Z']+)*))(,|\n)(?<!HIV|USEFUL SKILLS,|TALENTS,)
[[\1]]\4

lowercase the allcaps
` ([A-Z])([A-ZÉ']+)\b(?<!POV|CEO|ESP|PR|HIV|STD|IQ|ADHD|AIDS|OCD|FBI|GPS|^UN|EMP|DIY|PTA|PTSD|PTS|POW|YMCA|BAC|TV|^US|^ER)
\1\L\2

header 1
IF the headers don't have question marks
` ^([^,.]*):$
' # \1
IF THEY DO (then you risk getting regular sentences with colons and questions)
^(.+?)(\:|\?)\n
` # \1\n

header 2
(Self-Actualization|Esteem and Recognition|Love and Belonging|Safety and Security|Physiological Needs): 
## \1\n

bullet points
("|^)([A-Z](.*\)|[^.:]|(etc.)|(—\w.*)|(: \S.*))*$)
* \0


# EMOTIONAL WOUNDS
same as above, but at the end:
Bracketing the wound categories
, ([A-Z][\w()\-' ]+)
, [[_Emotional Wounds Tutorial#\1]]
THEN
(Category\n)\* ([A-Z][\w()\- ]+)(|,)
\1[[_Emotional Wounds Tutorial#\2]]



# Cleanup
* Check for double line breaks (\n\n)
- Sleight-Of-Hand needs to be changed to Sleight Of Hand
- Look for singular traits that didn't get double brackets
- Also "Mental Disorder" should be Mental Condition
- look for (Superstition:) - referencing Superstition Good Luck / Bad Luck
- Look for things that mistakenly got double brackets
- At the end of all this, be good to search for "reference", "similar to" and "see" and "see the entry on", "entries", "entry", that will show us supposed links to other entries that we've erased the link to
- look for weird quotation “ and ”
- cordoning off the section
(# Setting Description Example)
---\n\1

---
# LEVERAGE REGEX
` <page>[\s\S]*?(?=\n.*?px\]\])
\n\n# EPISODE\n

 \| Series\s.*(Season) = (\d) \| (Episode) = (\d)
 \n# \1 \2\n# \3 \4\n

 \| Airdate[\s\S]*?(?=(px))[\s\S]*?(?=\}\})\}\} 
 # Summary\n
 
 ==([^,.==]*)== 
 \n# \1\n

[^\n]\* 
\n* 

# Production[\s\S]*?(?=\n.*?#)

\[\[File[\s\S]*?(?=\*)

\*\w

https:

\[\[Category

''
'''

---
# For capturing line items from rpg tables and making them into individual files
## In Excel
- Proper(subsection title)
- First Table =CONCAT($B$1," - ",B$2," -- ",B3)
- Bottom Table =CONCAT($B$1," - ",B$16," -- ",B17)
- Apply to the rest
- Copy the results

## In Kate
First remove columns we don't need from excel paste
	\S(\S|).+?	
\n
AND
			\n\n\n

- Replace all ’ with '
- replace / with "or"
- Remove any ? marks
- Remove any periods
- Then, use the changebat file with below regex:
^([A-Z].*\- \w.*)
echo >> "\1.md"

Run create files batch file
Run paste text batch file

This will add the file name into the table prop:
(\ntable:)(\npage:\nrpgSystem:\nrpgTag:\ndiceType:\n---\n)filename (\w.*) \- (\w.*) \-\-\s.*
 "[[\3]]"\1 \4\2

Then need to use powerrename to remove the cruft from the beginning of filename
^\w.* -- 

---
# Another way to get line items into files

## In Excel
- Use excel to get data from pdf
- grab the relevant pages (ignore the table options)
- Do basic cleaning
- Copy paste the line items with their headers into obsidian page

## In Obsidian
- Make the headers into h1
- Fix up the property data and folder location in the Table Line Item template to match necessary info
- apply templater