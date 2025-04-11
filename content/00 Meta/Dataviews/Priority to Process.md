TABLE file.inlinks AS Inlinks, file.outlinks AS Outlinks, file.tags AS Tags
FROM "10 Pending"
WHERE length(file.inlinks) > 0 OR length(file.outlinks) > 1 Or length(file.tags) > 2
SORT file.size ASC
