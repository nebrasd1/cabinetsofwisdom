# Source: https://github.com/stories-with-dice/stories-with-dice.github.io/blob/master/quartz.layout.ts
# Purpose:
- Useful to see how to add things like sortFn and mapFn which adjusts the explorer behavior.
- It also gave me the way to add explorer to mobile view.

---

import {PageLayout, SharedLayout} from "./quartz/cfg"
import * as Component from "./quartz/components"
import {Options} from "./quartz/components/ExplorerNode"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "My DriveThruRPG": "https://www.drivethrurpg.com/browse.php?author=Christopher+Dimitrios&affiliate_id=1026766",
      "My Itch.io": "https://chaosbadger.itch.io/",
    },
  }),
}


export const sortFn: Options["sortFn"] = (a, b) => {
  if (!a.file && !b.file) {
    return a.displayName.localeCompare(b.displayName);
  } 
  
  if (a.file && b.file) {
    return b.file.dates?.created.getTime() - a.file.dates?.created.getTime();
  }

  if (a.file && !b.file) {
    return -1
  } else {
    return 1
  }
};

export const mapFn: Options["mapFn"] = (node) => {
  // dont change name of root node
  if (node.depth > 0) {
    // set emoji for file/folder
    if (node.file) {
      node.displayName = "📝 " + node.displayName
    } else {
      node.displayName = "📁 " + node.displayName
    }
  }
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(
      Component.Explorer({
        sortFn: sortFn,
        mapFn: mapFn,
        folderDefaultState: "collapsed",
        useSavedState: false
      })
    ),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Search()),
    Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes()),    
    Component.DesktopOnly(
      Component.Explorer({
        sortFn: sortFn,
        mapFn: mapFn
      })
    )
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}