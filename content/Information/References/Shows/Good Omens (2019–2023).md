---
aliases:
  - Good Omens
type:
  - series
subType: 
title: Good Omens
englishTitle: Good Omens
year: 2019–2023
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1869454/
id: tt1869454
genres:
  - Comedy
  - Fantasy
studios:
  - N/A
episodes: 0
duration: 328 min
onlineRating: 8
actors:
  - David Tennant
  - Michael Sheen
  - Miranda Richardson
image: https://m.media-amazon.com/images/M/MV5BZmMzZTNkMTYtOWNmNC00NGU3LThlZTYtNDU2NDQ5YTdjMzUzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg
released: true
streamingServices: 
airing: true
airedFrom: 5/31/2019
airedTo: unknown
watched: true
lastWatched: 2023-09-10
personalRating: 10
---
```dataviewjs
$= dv.current().title
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```
Type: `$= dv.current().type` 
Episodes: `$= dv.current().episodes `
Duration: `$= dv.current().duration `
Aired from: `$= dv.current().airedFrom `
Aired until: `$= dv.current().airedTo `
Studios: `$= dv.current().studios.join(', ')`
Online Rating: `$= dv.current().onlineRating`

# Genres:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```
# Actors
```dataviewjs
dv.current().actors.length === 0 ? dv.span(' - none') : dv.list(dv.current().actors)
```

# Status
```dataviewjs
let text = '';

if (!dv.current().released) {
	text += '**Not released**\n';
	if (dv.current().airedFrom) {
		text += 'The series will release on ' + dv.current().release_date + '.';
	} else {
		text += 'The series is not released yet.';
	}
	
} else if (dv.current().airing) {
	text += '**Not finished**\n';
	text += 'The series is not fully released yet.';
}

if (text) {
	dv.paragraph(text);
}
```