```dataviewjs
// Headings you would like to summarise the text for
const headings = ['character', 'location', 'group', 'plot']

// You can update this to filter as you like.
// Here it is only returning results inside the "Daily notes" folder
const pages = dv.pages('"00 Meta/SWN TEST SITE"')

const output = {}
headings.forEach(x => output[x] = [])
for (const page of pages) {
  const file = app.vault.getAbstractFileByPath(page.file.path)
  // Read the file contents
  const contents = await app.vault.read(file)
  for (let heading of headings) {
    // Sanitise the provided heading to use in a regex
    heading = heading.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')
    const regex = `(^|\n)#+ ${heading}\r?\n(.*?)(\n#+ |\n---|$)`
    // Extract the summary
    for (const block of contents.match(new RegExp(regex, 'isg')) || []) {
      const match = block.match(new RegExp(regex, 'is'))
      output[heading].push({
        text: match[2].trim(),
        title: '[[' + file.path + '|' + file.basename + ']]'
      })
    }
  }
}
Object.keys(output).forEach(heading => {
  dv.header(1, heading)
  output[heading].forEach(entry => {
    dv.paragraph("- " + entry.text + " (*This is from* " + entry.title + ")")
  })
  
})
```



%%

// Headings you would like to summarise the text for
const headings = ['character', 'location', 'group', 'plot']

// You can update this to filter as you like.
// Here it is only returning results inside the "Daily notes" folder
const pages = dv.pages('"00 Meta/SWN TEST SITE"')

const output = {}
headings.forEach(x => output[x] = [])
for (const page of pages) {
  const file = app.vault.getAbstractFileByPath(page.file.path)
  // Read the file contents
  const contents = await app.vault.read(file)
  for (let heading of headings) {
    // Sanitise the provided heading to use in a regex
    heading = heading.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')
    const regex = `(^|\n)#+ ${heading}\r?\n(.*?)(\n#+ |\n---|$)`
    // Extract the summary
    for (const block of contents.match(new RegExp(regex, 'isg')) || []) {
      const match = block.match(new RegExp(regex, 'is'))
      output[heading].push({
        title: '[[' + file.path + '|' + file.basename + ']]',
        text: match[2].trim()
      })
    }
  }
}
Object.keys(output).forEach(heading => {
  dv.header(1, heading)
  output[heading].forEach(entry => {
    dv.header(4, entry.title)
    dv.paragraph(entry.text)
  })
})
%%
