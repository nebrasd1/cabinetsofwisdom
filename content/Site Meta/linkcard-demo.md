---
title: Link Card Demo
draft: false
---

Three cards testing the `linkcard` transformer: full card with thumbnail, text-only, and one with a tall/portrait image.

## Full card (image + favicon + description)

```linkcard
url: https://oneminutepark.tv/
title: One Minute Park
description: A livestream of a different real-world park, one minute at a time.
image: https://oneminutepark.tv/images/hands.png
favicon: https://oneminutepark.tv/favicon.ico
```

## Text-only card (url + title only)

```linkcard
url: https://solar.lowtechmagazine.com/
title: Low-tech Magazine
```

## Card with portrait/tall image and description, no favicon

```linkcard
url: https://www.are.na/
title: Are.na
description: A platform for saving, connecting, and building with information.
image: https://pbs.twimg.com/profile_images/1302303088448659456/t_B8yRwP_400x400.jpg
```

## Adversarial description (double-quote + colon mid-string)

```linkcard
url: https://example.com/idleness
title: On Idleness
description: 'Why "idleness" matters: a rebuttal'
```
