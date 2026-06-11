---
aliases: Hades 2
type: game
subType: ""
title: Hades II
englishTitle: Hades II
year: "2025"
dataSource: SteamAPI
url: https://store.steampowered.com/app/1145350
id: 1145350
developers:
  - Supergiant Games
publishers:
  - Supergiant Games
genres:
  - Action
  - Indie
  - RPG
onlineRating: 94
image: https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1765831644
released: true
releaseDate: 09/25/2025
played: false
personalRating: 0
consuming: true
modified: 2026-05-29T10:39:18+03:00
---
```base
filters:
  and:
    - 'type == "session"'
    - 'work == this'
formulas:
  hours: 'if(minutes_played, (minutes_played / 60).round(1), "")'
views:
  - type: table
    name: My sessions
    order:
      - date
      - minutes_played
      - formula.hours
```
