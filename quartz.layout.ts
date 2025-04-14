import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      //GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    //Component.Properties(), //properties component.. turned off until i can figure out a better way to use it.
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT OUTPUT",
        limit: 4,
        filter: (f) =>
          f.slug!.startsWith("Output/") && f.slug! !== "Output/index" && f.slug! !== "Output/Things_I_Found/index" && f.slug! !== "Output/Writings/index",
        linkToMore: "Output/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT HIGHLIGHTS",
        limit: 4,
        filter: (f) => f.slug!.startsWith("Information/References/") && f.slug! !== "Information/References/index" && !f.frontmatter?.sidebar,
        linkToMore: "Information/References/" as SimpleSlug,
      }),
    ),
  ],
  right: [
    //Component.Graph(),
    Component.Backlinks(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    //Component.Explorer(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT OUTPUT",
        limit: 4,
        filter: (f) =>
          f.slug!.startsWith("Output/") && f.slug! !== "Output/index" && !f?.frontmatter?.sidebar,
        linkToMore: "Output/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "RECENT HIGHLIGHTS",
        limit: 4,
        filter: (f) => f.slug!.startsWith("Information/References/") && f.slug! !== "Information/References/index" && !f?.frontmatter?.sidebar,
        linkToMore: "Information/References/" as SimpleSlug,
      }),
    ),
  ],
  right: [],
}

/* Extra sections in case we need them:

    Component.DesktopOnly(
      Component.ProcessLinks({
      title: "PROCESS",
      limit: 8,
      filter: (file) => file?.frontmatter?.processLink,
    }),
  ),
    Component.DesktopOnly(
      Component.SidebarLinks({
      title: "LINKS",
      limit: 8,
      filter: (file) => file?.frontmatter?.sidebar,
    }),
  ),
*/
