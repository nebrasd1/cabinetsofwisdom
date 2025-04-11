```dataview
TABLE document-references, source-url
FROM "20 Information/References"
WHERE contains(document-references, "swn")
SORT file.ctime DESC

```

